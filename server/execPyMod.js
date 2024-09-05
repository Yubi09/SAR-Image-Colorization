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

const executeScript = (objId) => {
    return new Promise((resolve, reject) => {
        if (objId === null) {
            return reject(new error("No obj id passed"))
        }
        const command = `${venvPath} && python ${pathToScript} ${objId}`;
        console.log(`Run Command: ${command}`);

        exec(command, (err, stdout, stderr) => {
            if (err || stderr) {
                return reject(err);
            }

            console.log(`Stdout: ${stdout}`);
            return resolve();
        });
    });
};

export default executeScript;