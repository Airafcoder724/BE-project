import express from "express";
import { connectDb } from "./db/connectDb.js";
import dotenv from "dotenv";
import authroutes from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";
dotenv.config();
const app = express();
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(cookieParser());
const PORT = process.env.PORT || 5000;

app.use("/api/auth", authroutes);

app.listen(PORT, () => {
  connectDb();
  console.log("server started at port ", PORT);
});
