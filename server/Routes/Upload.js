import { Router } from "express";
import handleImages, { middle } from "../Controllers/Upload.js";

const uploadRouter = Router();
uploadRouter.post("/", handleImages);

export default uploadRouter;
