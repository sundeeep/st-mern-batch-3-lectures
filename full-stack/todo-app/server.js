const express = require("express");
const path = require("path");
const { TodoStore } = require("./TodoStore.js");

console.log("Welcome to your first backend server...")

const app = express();
const publicAbsolutePath = path.join(__dirname, "public");
const hostThePublic = express.static(publicAbsolutePath);

const todoStoreInstance = new TodoStore();

app.use(hostThePublic);
app.use(express.json());

const PORT = 3000;

app.get("/welcome", (request, response) => {
  response.json({
    message: "Welcome to first api calling...."
  })
})

app.post("/api/v1/todos", (req, res) => {
  const { taskTitle, taskDescription, isTaskDone } = req.body;
  if (!taskTitle.trim() || !taskDescription.trim()) {
    res.status(400).json({
      error: true,
      message: "data is not valid, It shouldn't be empty!"
    })
  }

  const newTask = todoStoreInstance.saveTodo(taskTitle, taskDescription, isTaskDone);
  if (!newTask.taskTitle || !newTask.taskDesciption) {
    res.status(400).json({
      error: true,
      message: "task is not saved properly!"
    })
  }

  res.status(201).json({
    success: true,
    message: "New Task is created successfully!"
  })
})

app.get("/", (request, response) => {
  console.log(path.join(__dirname, "public", "index.html"))
  response.sendFile(path.join(__dirname, "public", "index.html"))
})

app.listen(PORT, function () {
  console.log("Server is running at port: ", PORT);
});