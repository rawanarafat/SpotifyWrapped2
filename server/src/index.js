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

// Serve static files from the React build directory
app.use(express.static(path.join(appRoot, "client", "build")));

// Catch-all route to serve the React app's HTML file
app.get("*", function (req, res) {
  const indexPath = path.join(appRoot, "client", "build", "index.html");
  res.sendFile(indexPath);
});

app.listen(7001, () => console.log("Server started"));

