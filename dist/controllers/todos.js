"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.getTodos = exports.createTodo = void 0;
const todos_1 = require("../models/todos");
const todos = [];
const createTodo = (req, res, next) => {
    const { text } = req.body;
    const newTodo = new todos_1.Todo(Math.random().toString(), text);
    todos.push(newTodo);
    return res.json({ status: 201, message: "Created Successfully", newTodo });
};
exports.createTodo = createTodo;
const getTodos = (req, res, next) => {
    return res.json({
        status: 200,
        message: "Success",
        todos,
    });
};
exports.getTodos = getTodos;
const updateTodo = (req, res, next) => {
    const { id } = req.params;
    const { text } = req.body;
    let todo = todos.find((todo) => todo.id === id);
    console.log(id, text, todo);
    if (todo) {
        todo = { ...todo, text };
    }
    else {
        throw new Error("Could not find the todo");
    }
    return res.json({ status: 200, message: "Success", updatedTodo: todo });
};
exports.updateTodo = updateTodo;
const deleteTodo = (req, res, next) => {
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
exports.deleteTodo = deleteTodo;
