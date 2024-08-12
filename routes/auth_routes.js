import { SignUp } from "../controllers/auth_controller.js";
import { getAllUsers } from "../controllers/get_users_controller.js";

import { login } from "../controllers/login_controller.js";

import express from "express";
const router = express.Router();
router.post("/signUp",SignUp);
router.post("/login",login);
router.get("/getuser",getAllUsers);

export default router; 