import os
import random
import shutil

# Set the paths for the source and destination folders
source_path = os.path.join(os.path.abspath(os.curdir), "agri")
train_s1 = os.path.join(os.path.abspath(os.pardir), "s1")
train_s2 = os.path.join(os.path.abspath(os.pardir), "s2")
remaining_s1 = os.path.join(os.path.abspath(os.curdir), "remaining_data\\s1")
remaining_s2 = os.path.join(os.path.abspath(os.curdir), "remaining_data\\s2")

# Create the destination directories if they don't exist
os.makedirs(train_s1, exist_ok=True)
os.makedirs(train_s2, exist_ok=True)
os.makedirs(remaining_s1, exist_ok=True)
os.makedirs(remaining_s2, exist_ok=True)


s1_path = os.path.join(source_path, 's1')
s2_path = os.path.join(source_path, 's2')

# Get all image files in s1 and s2
s1_images = sorted(os.listdir(s1_path))
s2_images = sorted(os.listdir(s2_path))

# Ensure both directories have the same number of images
assert len(s1_images) == len(s2_images), "Mismatch between s1 and s2 images"

# Randomly select 1200 images
selected_indices = random.sample(range(len(s1_images)), 1200)
x = 0
for i, img_name in enumerate(s1_images):
    s1_img_path = os.path.join(s1_path, img_name)
    s2_img_path = os.path.join(s2_path, s2_images[i])

    if i in selected_indices:
        # Copy selected images to the selected_data folder
        x += 1
        print(f"image copied {x}: {img_name} ")
        shutil.copy(s1_img_path, os.path.join(train_s1, img_name))
        shutil.copy(s2_img_path, os.path.join(train_s2, s2_images[i]))
    else:
        # Copy remaining images to the remaining_data folder
        shutil.copy(s1_img_path, os.path.join(remaining_s1, img_name))
        shutil.copy(s2_img_path, os.path.join(remaining_s2, s2_images[i]))

print("Images have been successfully copied.")
