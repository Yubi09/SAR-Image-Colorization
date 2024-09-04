import shutil
import os

# Source and destination paths
source_folder = 'path/to/source/folder/in/Drive'
destination_folder = os.path.abspath(os.curdir)

# Remove destination folder if it exists
if os.path.exists(destination_folder):
    shutil.rmtree(destination_folder)

# Copy the entire folder and its contents
shutil.copytree(source_folder, destination_folder)

print(f"Folder copied from {source_folder} to {destination_folder}")