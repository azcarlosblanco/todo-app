const express = require("express");

const {
  getTodos,
  addTodos,
  deleteTodo,
  updateTodo
} = require("../services");

const todoRouter = express.Router();

todoRouter.get("/api/todos", getTodos);
todoRouter.post("/api/todos", addTodos);
todoRouter.delete("/api/todos", deleteTodo);
todoRouter.put("/api/todos", updateTodo);

module.exports = todoRouter;
