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

const appRoot = process.cwd();

app.use(cors());

app.use(cookieParser());

app.use(express.json());

app.use("/auth", userRouter);
app.use("/mytop", topRouter);

const __filename = fileURLToPath(import.meta.url);
// Get the directory path
const __dirname = path.dirname(__filename);

// Serve static files from the React build directory
//app.use(express.static(path.join(__dirname, 'client', 'build')));

// Catch-all route to serve the React app's HTML file
app.use(express.static(path.join(appRoot, "client", "build")));

// Catch-all route to serve the React app's HTML file
app.get("*", function (req, res) {
  const index = path.join(__dirname, "build", "index.html");
  res.sendFile(index);
});

app.listen(7001, () => console.log("Server started"));
