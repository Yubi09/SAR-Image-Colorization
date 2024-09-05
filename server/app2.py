import os
import sys

from bson import ObjectId
from pymongo import MongoClient
from PIL import Image
import torch
from torchvision import transforms

from train import GeneratorUNet, device


# Connect to database
try:
    client  = MongoClient("mongodb://127.0.0.1:27017/")
    db = client["test"]
    collection = db["images"]
    print("python: database connected")
except Exception as e:
    print("Database connection error")
    raise e

# Load the trained Generator model
generator = GeneratorUNet(in_channels=3, out_channels=3).to(device)

# Load model weights (adjust based on the device availability)
try:
    generator.load_state_dict(torch.load(os.path.join(os.path.abspath(os.curdir), "generator_final.pth"), map_location=device, weights_only=True))
except Exception as e:
    print("Error loading weights. If you trust the source, try setting weights_only=False.")
    raise e

generator.eval()

# Define the transformation
transform = transforms.Compose([
    transforms.Resize((256, 256)),
    transforms.ToTensor(),
    transforms.Normalize([0.5, 0.5, 0.5], [0.5, 0.5, 0.5])
])

# Define input and output directories
input_dir = os.path.join(os.path.abspath(os.curdir), "input_images")   # Change to your input directory
output_dir = os.path.join(os.path.abspath(os.curdir), "output_images")   # Change to your output directory

def SAR_colorize(input_image: Image) -> Image:
    # Preprocess the input image
    input_tensor = transform(input_image).unsqueeze(0).to(device)

    # Generate the output image
    with torch.no_grad():
        output_tensor = generator(input_tensor)

    # De-normalize the output tensor
    output_tensor = output_tensor.squeeze().cpu()  # Remove batch dimension and move to CPU
    output_tensor = output_tensor * 0.5 + 0.5  # De-normalize to [0, 1]

    # Convert to PIL image
    output_image = transforms.ToPILImage()(output_tensor)

    # Return the output_image
    return output_image

def main() -> None:
    if len(sys.argv) < 2:
        print("Provide the image name as argument")
        return

    objId = ObjectId(sys.argv[1])
    try:
        inImg = collection.find_one({"_id": objId})
        file_name = inImg["fileName"]
        generated_file_name = inImg["path"].split("\\")[1]
        print("Image Acquired")

        # Source and dest path
        input_image_path = os.path.join(input_dir,generated_file_name)
        output_image_path = os.path.join(output_dir, f"generated_{generated_file_name}")

        if input_image_path is None:
            raise "Input image path is not valid"
        
    except Exception as e:
        print("DB loading:",e)
        exit(1)

    try:
        input_image = Image.open(input_image_path).convert("RGB")
        print("Image loaded")
        output_image = SAR_colorize(input_image)
        print("Output image generated")
    except Exception as e:
        print("Error loading input image or generating the output image")
        raise e
    
    
    # Save the image
    output_image.save(output_image_path)
    op_img_size = os.stat(output_image_path).st_size
    print("Generated image saved")
        
    try:
        op_image_name = f"generated_{file_name}";
        # insert the image in db
        opImg = {"fileName": op_image_name,"path": f"output_dir\\{op_image_name}","mimetype": inImg["mimetype"],"size": op_img_size}
        collection.insert_one(opImg)
        print("Output image added to DB:", opImg)

        # update the input image
        collection.find_one_and_update({"_id": objId}, {"$set": {"opImageId": opImg["_id"]}})
        print("Input image entry updated")
    except Exception as e:
        print(e)

    client.close()

if __name__ == "__main__":
    main()