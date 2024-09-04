import torch
import torch.nn as nn
import torch.optim as optim
from torch.utils.data import DataLoader, Dataset
from torchvision import transforms
import os
from PIL import Image
from pytorch_msssim import ssim

# Define the Generator using U-Net architecture
class GeneratorUNet(nn.Module):
    def __init__(self, in_channels=3, out_channels=3):
        super(GeneratorUNet, self).__init__()

        # Downsampling (Encoder)
        self.down1 = self.down_block(in_channels, 64, normalize=False)
        self.down2 = self.down_block(64, 128)
        self.down3 = self.down_block(128, 256)
        self.down4 = self.down_block(256, 512, dropout=0.5)
        self.down5 = self.down_block(512, 512, dropout=0.5)
        self.down6 = self.down_block(512, 512, dropout=0.5)
        self.down7 = self.down_block(512, 512, dropout=0.5)
        self.down8 = self.down_block(512, 512, normalize=False, dropout=0.5)

        # Upsampling (Decoder)
        self.up1 = self.up_block(512, 512, dropout=0.5)
        self.up2 = self.up_block(1024, 512, dropout=0.5)
        self.up3 = self.up_block(1024, 512, dropout=0.5)
        self.up4 = self.up_block(1024, 512, dropout=0.5)
        self.up5 = self.up_block(1024, 256)
        self.up6 = self.up_block(512, 128)
        self.up7 = self.up_block(256, 64)
        self.final_up = nn.Sequential(
            nn.ConvTranspose2d(128, out_channels, 4, 2, 1),
            nn.Tanh()
        )

    def down_block(self, in_channels, out_channels, normalize=True, dropout=0.0):
        layers = [nn.Conv2d(in_channels, out_channels, 4, stride=2, padding=1)]
        if normalize:
            layers.append(nn.BatchNorm2d(out_channels))
        layers.append(nn.LeakyReLU(0.2))
        if dropout:
            layers.append(nn.Dropout(dropout))
        return nn.Sequential(*layers)

    def up_block(self, in_channels, out_channels, dropout=0.0):
        layers = [
            nn.ConvTranspose2d(in_channels, out_channels, 4, stride=2, padding=1),
            nn.BatchNorm2d(out_channels),
            nn.ReLU(inplace=True)
        ]
        if dropout:
            layers.append(nn.Dropout(dropout))
        return nn.Sequential(*layers)

    def forward(self, x):
        # Downsample
        d1 = self.down1(x)
        d2 = self.down2(d1)
        d3 = self.down3(d2)
        d4 = self.down4(d3)
        d5 = self.down5(d4)
        d6 = self.down6(d5)
        d7 = self.down7(d6)
        d8 = self.down8(d7)

        # Upsample with skip connections
        u1 = self.up1(d8)
        u2 = self.up2(torch.cat([u1, d7], 1))
        u3 = self.up3(torch.cat([u2, d6], 1))
        u4 = self.up4(torch.cat([u3, d5], 1))
        u5 = self.up5(torch.cat([u4, d4], 1))
        u6 = self.up6(torch.cat([u5, d3], 1))
        u7 = self.up7(torch.cat([u6, d2], 1))
        return self.final_up(torch.cat([u7, d1], 1))

# Define the Discriminator network
class Discriminator(nn.Module):
    def __init__(self, in_channels=3):
        super(Discriminator, self).__init__()

        def discriminator_block(in_filters, out_filters, normalize=True):
            layers = [nn.Conv2d(in_filters, out_filters, 4, stride=2, padding=1)]
            if normalize:
                layers.append(nn.BatchNorm2d(out_filters))
            layers.append(nn.LeakyReLU(0.2, inplace=True))
            return layers

        self.model = nn.Sequential(
            *discriminator_block(in_channels * 2, 64, normalize=False),
            *discriminator_block(64, 128),
            *discriminator_block(128, 256),
            *discriminator_block(256, 512),
            nn.Conv2d(512, 1, 4, stride=1, padding=1)  # Adjusted padding to maintain output size
        )

    def forward(self, img_A, img_B):
        img_input = torch.cat((img_A, img_B), 1)
        return self.model(img_input)

# Device configuration
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

# Custom dataset
class CustomDataset(Dataset):
    def __init__(self, root_dir_A, root_dir_B, transform=None):
        self.root_dir_A = root_dir_A
        self.root_dir_B = root_dir_B
        self.transform = transform

        self.image_files_A = sorted(os.listdir(root_dir_A))
        self.image_files_B = sorted(os.listdir(root_dir_B))

    def __len__(self):
        return len(self.image_files_A)

    def __getitem__(self, idx):
        img_path_A = os.path.join(self.root_dir_A, self.image_files_A[idx])
        img_path_B = os.path.join(self.root_dir_B, self.image_files_B[idx])

        image_A = Image.open(img_path_A).convert("RGB")
        image_B = Image.open(img_path_B).convert("RGB")

        if self.transform:
            image_A = self.transform(image_A)
            image_B = self.transform(image_B)

        return image_A, image_B

def main():
    # Initialize models and move to device
    generator = GeneratorUNet(in_channels=3, out_channels=3).to(device)
    discriminator = Discriminator(in_channels=3).to(device)

    # Loss functions
    criterion_GAN = nn.MSELoss().to(device)
    criterion_L1 = nn.L1Loss().to(device)

    # Optimizers
    optimizer_G = optim.Adam(generator.parameters(), lr=0.0002, betas=(0.5, 0.999))
    optimizer_D = optim.Adam(discriminator.parameters(), lr=0.0002, betas=(0.5, 0.999))

    # Training hyperparameters
    epochs = 100
    lambda_L1 = 100
    lambda_SSIM = 100

    # Define transformations for color images
    transform = transforms.Compose([
        transforms.Resize((256, 256)),
        transforms.ToTensor(),
        transforms.Normalize([0.5, 0.5, 0.5], [0.5, 0.5, 0.5])
    ])

    # Define directories for input (A) and target (B) images
    root_dir_A = '/content/s1'
    root_dir_B = '/content/s2'

    # Create the dataset and dataloader
    dataset = CustomDataset(root_dir_A=root_dir_A, root_dir_B=root_dir_B, transform=transform)
    dataloader = DataLoader(dataset, batch_size=16, shuffle=True)

    # Training Loop
    for epoch in range(epochs):
        for i, (real_A, real_B) in enumerate(dataloader):
            real_A, real_B = real_A.to(device), real_B.to(device)

            # Adversarial ground truths
            valid = torch.ones((real_A.size(0), 1, 15, 15), requires_grad=False).to(device)
            fake = torch.zeros((real_A.size(0), 1, 15, 15), requires_grad=False).to(device)

            # Train Generator
            optimizer_G.zero_grad()
            fake_B = generator(real_A)
            loss_GAN = criterion_GAN(discriminator(fake_B, real_A), valid)
            loss_L1 = criterion_L1(fake_B, real_B)
            loss_SSIM = 1 - ssim(fake_B, real_B, data_range=2.0)
            loss_G = loss_GAN + (lambda_L1 * loss_L1) + (lambda_SSIM * loss_SSIM)
            loss_G.backward()
            optimizer_G.step()

            # Train Discriminator
            optimizer_D.zero_grad()
            loss_real = criterion_GAN(discriminator(real_B, real_A), valid)
            loss_fake = criterion_GAN(discriminator(fake_B.detach(), real_A), fake)
            loss_D = (loss_real + loss_fake) / 2
            loss_D.backward()
            optimizer_D.step()

        print(f"[Epoch {epoch}/{epochs}] [D loss: {loss_D.item()}] [G loss: {loss_G.item()}]")

        # Save models every 10 epochs (optional)
        if epoch % 10 == 0:
            torch.save(generator.state_dict(), f"generator_epoch_{epoch}.pth")
            torch.save(discriminator.state_dict(), f"discriminator_epoch_{epoch}.pth")

    # Save final models (optional)
    torch.save(generator.state_dict(), "generator_final.pth")
    torch.save(discriminator.state_dict(), "discriminator_final.pth")

if __name__ == "__main__":
    main()
