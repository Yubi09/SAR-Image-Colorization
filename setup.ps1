# Step 1: Navigate to client and server directories and run npm install
echo "Running npm install in client and server directories..."

# Go to client directory and run npm install
echo "Navigating to client directory..."
cd ./client
echo "Running npm install in client..."
npm install

# Go to server directory and run npm install
echo "Navigating to server directory..."
cd ../server
echo "Running npm install in server..."
npm install

# Step 2: Create the server/input_images and server/output_images directories
echo "Creating directories: server/input_images and server/output_images..."
New-Item -ItemType Directory -Path ./input_images -Force
New-Item -ItemType Directory -Path ./output_images -Force

# Step 3: Create a Python virtual environment in the server directory
echo "Creating Python virtual environment in the server directory..."
py -m venv web

# Step 4: Activate the virtual environment
echo "Activating the virtual environment..."
& .\web\Scripts\Activate

# Step 5: Install required Python packages from requirements.txt
echo "Installing Python packages from requirements.txt..."
pip install -r .\requirements.txt

echo "Setup complete!"

# Step 6: Deactivate the python virtual environment
echo "Deactivating the Python Virtual Environment... "
cd ..
deactivate

