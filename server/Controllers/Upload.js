import path from "path";
import fs from "fs";

import images from "../Models/ImageModel.js";
import UserModel from "../Models/UserModel.js";
import upload from "../config.js";
import executeScript from "../execPyMod.js";
import jwt from "jsonwebtoken";

const upload_path = "input_images/";

export const updateDataBase = async (req, res) => {
    const file = req.file;
    req.body.objId = null;
    if (file != undefined) {
        try {

            const token = req.headers.authorization.split(" ").pop();
            const inputUser = jwt.verify(token, `${process.env.JWT_SECRET}`);
            console.log(inputUser.email);


            const newFile = new images({
                fileName: file.originalname,
                path: path.join(upload_path, file.filename),
                mimetype: file.mimetype,
                size: file.size,
            });
            const path_file = await newFile
                .save()
                .then((result) => {
                    console.log("Data saved in disk...")
                    return result;
                })
                .catch((err) => console.error(err));
            const path_img_input = path_file.path.split("\\")[1]

            const user = await UserModel.findOneAndUpdate({ "email": inputUser.email }, {
                $push: {
                    listInputImg: { inputImgId: newFile._id }
                }
            }).then((result) => console.log("User:", result)).catch((err) => console.log("error: ", err));


            req.body.objId = newFile._id.toString();
            return path_img_input;
        } catch (err) {
            console.error("Database Error:", err);
            return res.status(500).send("Failed to save the file in Database");
        }
    } else {
        console.error("No image file provided");
        return res.status(500).send("No image file provided");
    }
};


export const middle = (req, res, next) => {
    const token = req.headers.authorization.split(" ").pop();
    const user = jwt.verify(token, `${process.env.JWT_SECRET}`);
    console.log("email:", user.email);
    req.body.email = user.email;
    next();
}

const handleImages = async function (req, res) {
    // console.log("request: ", req.cookies);
    upload(req, res, async (err) => {
        if (err) {
            return res.status(400).send({ message: err.message });
        } else if (req.file === undefined) {
            return res.status(400).send({ message: "No file Selected!" });
        } else {
            const uploadedFileID = await updateDataBase(req, res);
            const genImageName = `generated_${uploadedFileID}`;
            try {
                await executeScript(req.body.objId).then(() => console.log("Node: Image converted successfully")).catch((e) => { throw new Error(`Execute script error: ${e}`) });
                const gen_file = fs.readFileSync(`output_images\\${genImageName}`);
                if (gen_file) {
                    console.log("Node: Generated file loaded");
                }
                else {
                    console.error("Node: Generated file not found");
                }
                res.setHeader('Content-Type', 'image/png');
                res.setHeader('Content-Disposition', `attachment; filename="${genImageName}.png"`);
                return res.status(200).send(gen_file);
            } catch (err) {
                console.error("error: ", err);
                return res.status(500).send("Failed to execute script");
            }
        }
    });
};

export default handleImages;