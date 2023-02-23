const express = require("express");
const { check, validationResult } = require("express-validator");
const fruitRouter = express.Router();
fruitRouter.use(express.urlencoded({ extended: true }));

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

fruitRouter.get("/", (req, res) => {
  res.send(fruits);
});

fruitRouter.get("/:id", (req, res) => {
  let index = req.params.id - 1;
  res.send(fruits[index]);
});

fruitRouter.post("/", [check("color").not().isEmpty().trim()], (req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    res.json({error: errors.array()})
  } else {
    fruits.push(req.body);
    res.send("fruit added");
  }
});

fruitRouter.put("/:id", (req, res) => {
  let index = req.params.id - 1;
  fruits[index] = req.body;
  res.send("fruit updated");
});

fruitRouter.delete("/:id", (req, res) => {
  let index = req.params.id - 1;
  fruits.splice(index, 1);
  res.send("fruit deleted");
});

module.exports = { fruitRouter };