# Define the commands to run in separate terminals
$startCommand = 'npm run dev'


# Open a new PowerShell window and run npm run dev in the client directory
Write-Host "Starting client development server in a new PowerShell window..."
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd ./client; $startCommand"

# Open a new PowerShell window and run npm run dev in the server directory
Write-Host "Starting server development server in a new PowerShell window..."
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd ./server; $startCommand"

Write-Host "Development servers are starting in separate terminals..."
