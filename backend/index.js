import express from "express";
import { connectDb } from "./db/connectDb.js";
import dotenv from "dotenv";
import authroutes from "./routes/auth.routes.js";
import eventroutes from "./routes/event.routes.js";
import userroutes from "./routes/user.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
dotenv.config();
const app = express();
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(cookieParser());
const PORT = process.env.PORT || 5000;
const __dirname = path.dirname(new URL(import.meta.url).pathname);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/api/auth", authroutes);
app.use("/api/events", eventroutes);
app.use("/api/users", userroutes);

app.listen(PORT, () => {
  connectDb();
  console.log("server started at port ", PORT);
});
