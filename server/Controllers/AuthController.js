import User from '../Models/UserModel.js';
import jwt from 'jsonwebtoken';

const maxAge = 30 * 24 * 60 * 60;

const createToken = (email, userId) => {
  return jwt.sign({ username, email, userId }, process.env.JWT_KEY, { expiresIn: maxAge });
};

export const signup = async (request, response, next) => {
  try {
    const { email, password, username } = request.body;
    if (!email || !password || !username) {
      return response.status(400).send('Email, password and Username are required.');
    }
    const user = await User.create({ username, email, password });
    response.cookie('jwt', createToken(username, email, user.id), {
      maxAge,
      secure: true,
      sameSite: 'None',
    });

    return response.status(201).json({
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    console.log({ error });
    return response.status(500).send('Internal server error.');
  }
};

export const login = async (request, response, next) => { 
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
