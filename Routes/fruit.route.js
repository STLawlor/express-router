const express = require("express");
const router = express.Router();
router.use(express.urlencoded({ extended: true }));

// List of Fruits
let fruits = [
  {
    name: "Apple",
    color: "Red",
  },
  {
    name: "Banana",
    color: "Yellow",
  },
  {
    name: "Kiwi",
    color: "Green",
  },
  {
    name: "Grape",
    color: "Purple",
  },
];

router.get("/", (req, res) => {
  res.send(fruits);
});

router.get("/:id", (req, res) => {
  let index = req.params.id - 1;
  res.send(fruits[index]);
});

router.post("/", (req, res) => {
  fruits.push(req.body);
  res.send("fruit added");
});

router.put("/:id", (req, res) => {
  let index = req.params.id - 1;
  fruits[index] = req.body;
  res.send("fruit updated");
});

router.delete("/:id", (req, res) => {
  let index = req.params.id - 1;
  fruits.splice(index, 1);
  res.send("fruit deleted");
});