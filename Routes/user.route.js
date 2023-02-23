const express = require("express");
const { check, validationResult } = require("express-validator");
const userRouter = express.Router();

// List of Users
let users = [
  {
    name: "User 1",
    age: 30,
  },
  {
    name: "User 2",
    age: 45,
  },
  {
    name: "User 3",
    age: 27,
  },
  {
    name: "User 4",
    age: 22,
  },
];

userRouter.get("/", (req, res) => {
  res.send(users);
});

userRouter.get("/:id", (req, res) => {
  let index = req.params.id - 1;
  res.send(users[index]);
});

userRouter.post("/", [check("name").not().isEmpty().trim()], (req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    res.json({error: errors.array()})
  } else {
    users.push(req.body);
    res.send("user added");
  }
});

userRouter.put("/:id", (req, res) => {
  let index = req.params.id - 1;
  users[index] = req.body;
  res.send("user updated");
});

userRouter.delete("/:id", (req, res) => {
  let index = req.params.id - 1;
  users.splice(index, 1);
  res.send("user deleted");
});

module.exports = { userRouter };