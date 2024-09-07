
# Image generation code
import torch
from torchvision.transforms import ToPILImage
from PIL import Image
from torchvision import transforms
import os

device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
# Load the trained Generator model
generator = GeneratorUNet(in_channels=3, out_channels=3).to(device)

# Load model weights
generator.load_state_dict(torch.load("generator_final.pth", weights_only=True))
generator.eval()


input_dir = os.path.join(os.path.abspath(os.curdir), "input_images")  
output_dir = os.path.join(os.path.abspath(os.curdir), "output_images")  
os.makedirs(output_dir, exist_ok=True)

# transformation
transform = transforms.Compose([
    transforms.Resize((256, 256)),
    transforms.ToTensor(),
    transforms.Normalize([0.5, 0.5, 0.5], [0.5, 0.5, 0.5])
])

# Processing each image in the input directory
for filename in os.listdir(input_dir):
    if filename.endswith(('.png', '.jpg', '.jpeg')): 
        input_image_path = os.path.join(input_dir, filename)
        output_image_path = os.path.join(output_dir, f"generated_{filename}")

        # Load and preprocess the input image
        input_image = Image.open(input_image_path).convert("RGB")
        input_tensor = transform(input_image).unsqueeze(0).to(device)

        # Generate the output image
        with torch.no_grad():
            output_tensor = generator(input_tensor)

        # Denormalize the output tensor
        output_tensor = output_tensor.squeeze().cpu()  # Remove batch dimension and move to CPU
        output_tensor = output_tensor * 0.5 + 0.5  # Denormalize to [0, 1]

        # Convert to PIL image and save
        output_image = ToPILImage()(output_tensor)
        output_image.save(output_image_path)

        print(f"Processed {filename} -> {output_image_path}")

print("All images have been processed and saved.")
