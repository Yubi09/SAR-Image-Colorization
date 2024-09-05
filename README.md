# SAR Image Colorization

This project aims to colorize SAR (Synthetic Aperture Radar) images using a deep learning model. The backend processes the image and returns a colorized output.

## Project Structure

-   **client/**: React frontend for uploading images.
-   **server/**: Node.js backend for processing the image.
-   **model/**: Model-related files.
-   **PowerShell scripts**:
    -   `setup.ps1`: Sets up the project.
    -   `run.ps1`: Runs the project.
    -   `clear.ps1`: Clears setup.

## Setup

### Prerequisites

Make sure the following are installed on your system:

-   **Git**
-   **Node.js**
-   **MongoDB**
-   **Python**

### Steps

    To run the project locally follow the steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/Yubi09/SAR-Image-Colorization.git
    ```
2. **Run the setup script:**

    ```bash
    ./setup.ps1
    ```

3. **Update the environment variables:** Edit the `.env.example` file in the `server/` directory and set:

    - `MONGODB_URL`: Your MongoDB connection string.
    - `PORT`: Server port.
    - `JWT_TOKEN`: Your JWT token.

4. **Download the model file:** Download the [`generator_final.pth`](https://drive.google.com/file/d/1-1DoIwbtnbrbtn_4wbqn3JpFY9N-cnU3/view?usp=drive_link) file from Google Drive and place it in the `server/` directory.
5. **Download and place the required .dll file:** Download the [.dll](https://drive.google.com/file/d/1f22d95pLoRq3ck4uuXNOd7b4Q3pqQ_N_/view?usp=sharing) file from Google Drive and move it to:
    ```bash
    C:\Windows\System32
    ```
6. **Run the project:**
    ```bash
    ./run.ps1
    ```

## Usage

Once the project is running, access the frontend to upload SAR images for colorization. The backend will process and return the colorized image.
