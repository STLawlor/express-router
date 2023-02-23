const express = require("express");
const app = express();
const port = 3000;

// Express Routes
const { userRouter } = require("./Routes/user.route");
const { fruitRouter } = require("./Routes/fruit.route");

app.use("/user", userRouter);
app.use("/fruit", fruitRouter);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
