import path from "node:path";
import multer from "multer";

const destPath = process.env.TEMP_PATH || "input_images/";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, destPath);
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 },
    fileFilter: (req, file, cb) => {
        checkFileType(file, cb);
    },
}).single("image");

const checkFileType = (file, cb) => {
    const fileTypes = /jpeg|jpg|png/;
    const extName = fileTypes.test(
        path.extname(file.originalname).toLowerCase()
    );
    const mimetype = fileTypes.test(file.mimetype);
    if (mimetype && extName) {
        return cb(null, true);
    } else {
        cb(new Error("Error: Images only!"));
    }
};

export default upload;
