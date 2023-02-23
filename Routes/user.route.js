const express = require("express");
const router = express.Router();
router.use(express.urlencoded({ extended: true }));

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

router.get("/", (req, res) => {
  res.send(users);
});

router.get("/:id", (req, res) => {
  let index = req.params.id - 1;
  res.send(users[index]);
});

router.post("/", (req, res) => {
  users.push(req.body);
  res.send("user added");
});

router.put("/:id", (req, res) => {
  let index = req.params.id - 1;
  users[index] = req.body;
  res.send("user updated");
});

router.delete("/:id", (req, res) => {
  let index = req.params.id - 1;
  users.splice(index, 1);
  res.send("user deleted");
});
