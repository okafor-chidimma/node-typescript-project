import { Router } from "express";
import {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo,
} from "../controllers/todos";

const router = Router();

router.post("/create", createTodo);
router.patch("/:id", updateTodo);
router.delete("/:id", deleteTodo);
router.get("/", getTodos);

export default router;
