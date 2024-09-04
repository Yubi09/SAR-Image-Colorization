import { exec } from "child_process";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const venvPath = path.join(
    path.dirname(__dirname),
    "server",
    "web",
    "Scripts",
    "activate"
)

const pathToScript = path.join(__dirname, "app2.py");

const executeScript = (req, res) => {
    if (req.file != undefined) {
        if (req.body.objId === null) {
            console.error("No obj id passed");
        }
        const command = `${venvPath} && python ${pathToScript} ${req.body.objId}`;
        console.log(`Command: ${command}`);

        exec(command, (err, stdout, stderr) => {
            if (err) {
                console.error(`Error: ${err.message}`);
                return res.status(500).send("Failed to execute script.");
            }
            if (stderr) {
                console.error(`Stderr: ${stderr}`);
                return res.status(500).send("Script execution failed.");
            }

            console.log(`Stdout: ${stdout}`);
            return res.status(200).redirect("http://localhost:5173/landing");
        });
    } else {
        console.error("Exec-python: Req.file is undefined");
    }
};

export default executeScript;