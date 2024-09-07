import path from "path";
import fs from "fs";

import images from "../Models/ImageModel.js";
import upload from "../config.js";
import executeScript from "../execPyMod.js";
import UserModel from "../Models/UserModel.js";

import jwt from "jsonwebtoken";

const upload_path = "input_images/";

export const updateDataBase = async (req, res) => {
    const file = req.file;
    req.body.objId = null;
    if (file != undefined) {
        try {
            const token = req.headers.auth.split(" ").pop();
            const loggedInUser = jwt.verify(token, `${process.env.JWT_SECRET}`);
            console.log("loggedin user:", loggedInUser);



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

            await UserModel.findOneAndUpdate({ "email": loggedInUser.email }, {
                "$push": {
                    "inputImages": {
                        "inImgId": newFile._id
                    }
                }
            }).then((result) => {
                console.log("user updated successfully");
                return result;
            }).catch((err) => console.error("error: user not updated successfully", err));

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


const handleImages = async function (req, res) {
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

export const handleRecordImages = async (req, res) => {
    try {
        const token = req.headers.auth.split(" ").pop();
        // console.log("token:", token);
        const id = jwt.verify(token, `${process.env.JWT_SECRET}`);
        // console.log("id: ", id);
        const user = await UserModel.findById(id._id);
        const imagePairs = await Promise.all(
            user.inputImages.map(async (obj) => {
                const imgId = obj.inImgId;
                const [inputImagePath, time] = await images.findById(imgId).then((result) => {
                    return [result.path, result.createdAt];
                });
                const inImg = fs.readFileSync(inputImagePath);
                const outImg = fs.readFileSync(path.join("output_images", `generated_${inputImagePath.split("\\").pop()}`));
                return [time, inImg, outImg];
            })
        );
        // console.log(imagePairs);
        return res.status(200).json({ "imagePairs": imagePairs });
    } catch (error) {
        console.error("Error handling record images:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

export default handleImages;