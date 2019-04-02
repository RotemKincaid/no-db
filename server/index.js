const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const listController = require("./Controllers/ListController");

app.use(bodyParser.json());

app.get("/api/todos", listController.listShow);
app.post("/api/todos", listController.addTodo);

// put example axios.put(`/api/todos/3?todo=${anyvalhere}`).then(res => {

// })
app.put("/api/todos/:id", listController.editTodoById);
app.delete("/api/todos/:id", listController.removeFromList);

const PORT = 4000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
