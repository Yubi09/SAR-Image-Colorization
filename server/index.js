import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRoutes from './Routes/AuthRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
const databaseURL = process.env.DATABASE_URL;

app.use(
  cors({
    origin: [process.env.ORIGIN],
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());

app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

mongoose
  .connect(databaseURL)
  .then(() => {
    console.log('Connected to the database.');
  })
  .catch((error) => {
    console.log(error.message);
  });
