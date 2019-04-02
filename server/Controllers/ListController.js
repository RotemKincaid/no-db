// const todos = require("../data/data.json");
const todos = [];
let id = 28;

module.exports = {
  listShow: (req, res, next) => {
    res.status(200).send(todos);
  },

  addTodo: (req, res) => {
    const { todo, category } = req.body;
    const newTodo = {
      id,
      todo,
      category
    };
    todos.push(newTodo);
    id++;
    res.status(200).send(todos);
  },

  editTodoById: (req, res) => {
    const { id } = req.params;
    const { todo, category } = req.query;
    let index = todos.findIndex(elem => elem.id === +id);
    if (index !== -1) {
      todos[index].todo = todo || todos[index].name;
      todos[index].category = category || todos[index].category;
      res.status(200).send(todos);
    } else {
      res.status(404).send(" ID not found ");
    }
  },

  removeFromList: (req, res) => {
    const { id } = req.params;

    let index = todos.findIndex(elem => elem.id === +id);
    if (index !== -1) {
      todos.splice(index, 1);
      res.status(200).send(todos);
    } else {
      res.status(404).send(" Could not find ID ");
    }
  }
};
