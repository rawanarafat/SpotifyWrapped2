// server/index.js

import express from 'express';
import cors from 'cors';
import { userRouter } from './routes/login.js';
import cookieParser from 'cookie-parser';
import { topRouter } from './routes/top.js';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();
const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use('/auth', userRouter);
app.use('/mytop', topRouter);

// Resolve the current working directory
const cwd = process.cwd();

// Serve static files from the React build directory
app.use(express.static(path.resolve(cwd, 'client', 'build')));

// For any other routes, serve the index.html from the build folder
app.get('*', (req, res) => {
  res.sendFile(path.resolve(cwd, 'client', 'build', 'index.html'));
});

app.listen(7001, () => console.log('Server started'));
