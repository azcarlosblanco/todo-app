const moment = require("moment");

const { Todos } = require("../models");

const Time = moment.utc().format("YYYY-MM-DD HH:mm:ss");

const getTodos = (req, res) => {
  Todos.find({}).then((data) => {
    res.status(200).json({
      data,
    });
  });
};

const addTodos = (req, res) => {
  Todos.create(req.body).then((data) => {
    res.status(200).json({
      data,
    });
  });
};

const deleteTodo = (req, res) => {
  Todos.findOneAndDelete({ _id: req.body.id }).then((data) => {
    res.status(200).json({
      data,
    });
  });
};

const updateTodo = (req, res) => {
  const { id, completed, title, description } = req.body;
  Todos.findOneAndUpdate(
    { _id: id },
    {
      completed,
      title,
      description,
      modifiedOn: Time,
    },
    { new: true },
    (err, result) => {
      if (err) {
        res.status(410).json({
          data: err,
        });
      } else {
        res.status(200).json({
          data: result,
        });
      }
    }
  );
};

module.exports = {
  updateTodo,
  addTodos,
  deleteTodo,
  getTodos,
};
