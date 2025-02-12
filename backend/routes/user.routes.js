import express from "express";
import {
  getUsersById,
  getUsersData,
  updateStatus,
} from "../controller/user.controller.js";
import { checkAdmin } from "../middleware/checkAdmin.js";
import { verifyToken } from "../middleware/verifyToken.js";

const Router = express.Router();

Router.get("/getusers", verifyToken, checkAdmin, getUsersData);
Router.post("/getusersbyids", getUsersById);
Router.post("/updateStatus", updateStatus);
export default Router;
