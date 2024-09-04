import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './Routes/AuthRoutes.js';
import bodyParser from 'body-parser';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
const databaseURL = process.env.DATABASE_URL;

app.use(bodyParser.json());
app.use(cors());
app.use('/auth', authRoutes);

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
