import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/login.js";
import cookieParser from "cookie-parser";
import { topRouter } from "./routes/top.js";
import dotenv from "dotenv";
import { fileURLToPath } from "url"; // Import fileURLToPath
import path from "path";

dotenv.config();
const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use("/auth", userRouter);
app.use("/mytop", topRouter);

const __dirname = dirname(new URL(import.meta.url).pathname);

// Serve static files from the React build directory
app.use(express.static(path.resolve(__dirname, '..', 'client', 'build')));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'client', 'build', 'index.html'));
});


app.listen(7001, () => console.log("Server started"));


