import UserModel from '../Models/UserModel.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const signup = async (request, response, next) => {
  try {
    const { name, email, password } = request.body;
    const user = await UserModel.findOne({ email });
    if (user) {
      return response.status(409).json({
        success: false,
        message: 'User already exists with this email.',
      });
    }
    const userModel = new UserModel({ name, email, password });
    userModel.password = await bcrypt.hash(password, 10);
    await userModel.save();
    return response
      .status(201)
      .json({ success: true, message: 'Signup successfully.' });
  } catch (error) {
    return response
      .status(500)
      .json({ success: false, message: 'Internal server error' });
  }
};

export const login = async (request, response, next) => {
  try {
    const { email, password } = request.body;
    const user = await UserModel.findOne({ email });
    const errMsg = 'Auth Failed. Email or password is incorrect.';
    if (!user) {
      return response.status(403).json({
        success: false,
        message: errMsg,
      });
    }
    const isPasswordEqual = await bcrypt.compare(password, user.password);
    if (!isPasswordEqual) {
      return response.status(403).json({
        success: false,
        message: errMsg,
      });
    }
    const jwtToken = jwt.sign(
      { email: user.email, _id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '30d' }
    );
    return response.status(200).json({
      success: true,
      message: 'Login successfully.',
      jwtToken,
      email,
      name: user.name,
    });
  } catch (error) {
    return response
      .status(500)
      .json({ success: false, message: 'Internal server error' });
  }
};

export const logout = async (request, response, next) => {
  try {
    const { email, password } = request.body;
    if (!email || !password) {
      return response.status(400).send('Email and password are required.');
    }
  } catch (error) {
    console.log({ error });
    return response.status(500).send('Internal server error.');
  }
};
