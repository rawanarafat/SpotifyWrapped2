import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/login.js";
import cookieParser from "cookie-parser";
import { topRouter } from "./routes/top.js";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath, URL } from "url";

dotenv.config();
const app = express();



app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use("/auth", userRouter);
app.use("/mytop", topRouter);

// Serve static files from the React build directory
app.use(express.static(path.join(__dirname, 'client/build')));

// ... Define your API routes and other server configurations here

// For any other routes, serve the index.html from the build folder
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(7001, () => console.log("Server started"));

