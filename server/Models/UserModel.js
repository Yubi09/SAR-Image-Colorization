import mongoose from 'mongoose';
import { genSalt, hash } from 'bcrypt';

const userSchema = new mongoose.Schema(
  {
    userName: {
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
  },
);

userSchema.pre('save', async function (next) {
  const salt = await genSalt();
  this.password = await hash(this.password, salt);

  next();
});

const User = mongoose.model('Users', userSchema);

export default User;
