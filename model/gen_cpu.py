import torch
from torchvision.transforms import ToPILImage
from PIL import Image
from torchvision import transforms
from train import GeneratorUNet, device  # Ensure that the 'device' variable is defined correctly in train.py
import os

# Load the trained Generator model
generator = GeneratorUNet(in_channels=3, out_channels=3).to(device)

# Load model weights (adjust based on the device availability)
try:
    generator.load_state_dict(torch.load("generator_final.pth", map_location=device, weights_only=True))
except Exception as e:
    print("Error loading weights. If you trust the source, try setting weights_only=False.")
    raise e

generator.eval()

# Define input and output directories
input_dir = r'C:\Users\Cypher\Desktop\SIC\input_images'    # Change to your input directory
output_dir = r'C:\Users\Cypher\Desktop\SIC\output_images'  # Change to your output directory

# Ensure output directory exists
os.makedirs(output_dir, exist_ok=True)

# Define the transformation
transform = transforms.Compose([
    transforms.Resize((256, 256)),
    transforms.ToTensor(),
    transforms.Normalize([0.5, 0.5, 0.5], [0.5, 0.5, 0.5])
])

# Process each image in the input directory
for filename in os.listdir(input_dir):
    if filename.endswith(('.png', '.jpg', '.jpeg')):  # Ensure the file is an image
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
