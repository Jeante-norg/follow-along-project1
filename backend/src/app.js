if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "./src/config/.env",
  });
}

const express = require("express");

const app = express();
const userRouter = require("./routes/user.route");

app.get("/", (req, res) => {
  return res.send("Welcome to Backend.");
});

app.get("/user/squad", (req, res) => {
  return res.send("Welcome to the 5 AM club.");
});

app.use("/user", userRouter);

module.exports = app;
