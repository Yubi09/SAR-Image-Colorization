import { Router } from "express";
import handleImages, { handleRecordImages } from "../Controllers/Upload.js";

const uploadRouter = Router();
uploadRouter.post("/", handleImages);
uploadRouter.get("/", handleRecordImages);

export default uploadRouter;
