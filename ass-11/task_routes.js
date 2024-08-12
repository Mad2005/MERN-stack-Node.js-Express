
import express from "express";
import { create } from "../controllers/task_controller.js";
import { getAlltasks } from "../controllers/get_task_controller.js";

import { single } from "../controllers/get_singleTask_controller.js";
import { update } from "../controllers/update_task_controller.js";
import { delte } from "../controllers/delete_task_controller.js";

const router = express.Router();
router.post("/create_task",create);
router.get("/getTask",getAlltasks)
router.get("/getTask/:id",single)
router.put("/updateTask/:id",update)
router.delete("/delete/:id",delte)

export default router;