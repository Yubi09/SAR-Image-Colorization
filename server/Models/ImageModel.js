import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
    fileName: {
        type: String,
        required: [true, 'fileName is required.'],
    },
    path: { type: String, required: [true, "path is required"] },
    mimetype: { type: String, required: [true, "mimetype is required"] },
    size: { type: Number, required: [true, "size is required"] },
    uploadDate: {
        type: Date,
        default: Date.now,
        required: [true, "upload date is required"],
    },
    opImageId: { type: mongoose.Schema.Types.ObjectId, ref: "images" },
},
    { timestamps: true }
);

const images = mongoose.model("Images", imageSchema);

export default images;