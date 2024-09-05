import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

import authRoutes from './Routes/AuthRoutes.js';
import uploadRouter from "./Routes/Upload.js";

dotenv.config();


const app = express();
const PORT = process.env.PORT || 3001;
const databaseURL = process.env.DATABASE_URL;

app.use(bodyParser.json());
app.use(cors());

app.use('/auth', authRoutes);
app.use('/upload', uploadRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

try {
  if (databaseURL === undefined) {
    throw "Database url is undefined";
  }
  mongoose
    .connect(databaseURL)
    .then(() => {
      console.log('Connected to the database.');
    })
    .catch((error) => {
      console.log(error.message);
    });
} catch (err) {
  console.log(err.message);
  process.exit(1);
};
