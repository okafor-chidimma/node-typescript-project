import { RequestHandler } from "express";
import { Todo } from "../models/todos";

const todos: Todo[] = [];
export const createTodo: RequestHandler = (req, res, next) => {
  const { text } = req.body as { text: string };
  const newTodo = new Todo(Math.random().toString(), text);
  todos.push(newTodo);

  return res.json({ status: 201, message: "Created Successfully", newTodo });
};
export const getTodos: RequestHandler = (req, res, next) => {
  return res.json({
    status: 200,
    message: "Success",
    todos,
  });
};
//you can also use generic if you will be getting data from params
export const updateTodo: RequestHandler<{ id: string }> = (req, res, next) => {
  const { id } = req.params;
  const { text } = req.body as { text: string };
  let todo = todos.find((todo) => todo.id === id);
  console.log(id, text, todo);
  if (todo) {
    todo = { ...todo, text };
  } else {
    throw new Error("Could not find the todo");
  }

  return res.json({ status: 200, message: "Success", updatedTodo: todo });
};

export const deleteTodo: RequestHandler<{ id: string }> = (req, res, next) => {
  const { id } = req.params;

  let todoIndex = todos.findIndex((todo) => todo.id === id);
  if (todoIndex < 0) {
    throw new Error("Could not find the todo");
  }

  return res.json({
    status: 200,
    message: "Success",
    todos: todos.filter((todo) => todo.id !== id),
  });
};
