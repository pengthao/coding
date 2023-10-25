const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const {
  getCompliment,
  getFortune,
  flipCoin,
  resetScore,
  getAllTasks,
  deleteTask,
  createNewTask,
} = require("./controller");

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get("/api/heads", flipCoin);
app.get("/api/tails", flipCoin);
app.get("/api/resetScore", resetScore);
app.get("/api/toDo", getAllTasks);
app.post("/api/toDo", createNewTask);
app.delete(`/api/:id`, deleteTask);

//app.get("/api/seeCodes/", createPasswords);
//app.post("/api/createPass", createPasswords);

app.listen(4000, () => console.log("Server running on 4000"));
