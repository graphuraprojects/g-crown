import DatabaseConnection from "./configs/db.config.js";
import dotenv from "dotenv";
import app from "./app.js";
import { fileURLToPath } from "url";
import path from "path";
import express from "express";
import cors from "cors";

app.use(
    cors({
        origin: "*"
    }),
);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({
    path: "./.env",
});



app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

DatabaseConnection();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server Run on PORT: ${PORT}`));
