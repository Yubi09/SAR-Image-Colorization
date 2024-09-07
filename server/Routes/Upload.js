import { Router } from "express";
<<<<<<< HEAD
import handleImages, { middle } from "../Controllers/Upload.js";
=======
import handleImages, { handleRecordImages } from "../Controllers/Upload.js";
>>>>>>> dev

const uploadRouter = Router();
uploadRouter.post("/", handleImages);
uploadRouter.get("/", handleRecordImages);

export default uploadRouter;
