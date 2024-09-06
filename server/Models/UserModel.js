import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Username is required.'],
    },
    email: {
      type: String,
      required: [true, 'Email is required.'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required.'],
    },
    listInputImg: [
      {
        inputImgId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "images"
        }
      }
    ]
  },
);

const UserModel = mongoose.model('users', userSchema);

export default UserModel;
