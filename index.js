import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import productRouter from "./router/productRoute.js";
import cookieParser from "cookie-parser";

const app = express();

// Middleware setup
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true })); // Parse incoming URL-encoded requests
app.use(cookieParser()); // Parse cookies from incoming requests

app.use("/api", productRouter);

dotenv.config();
const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
