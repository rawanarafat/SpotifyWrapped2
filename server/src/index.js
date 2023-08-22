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
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(appRoot, "client", "build")));

app.get("*", function (req, res) {
  const indexPath = path.resolve(appRoot, "client", "build", "index.html");
  console.log("Serving index.html from:", indexPath);
  res.sendFile(indexPath);
});

app.listen(7001, () => console.log("Server started"));
