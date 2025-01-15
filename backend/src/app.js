const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/user.route.js");
const productRouter = require("./routes/product.route.js");
const app = express();
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "./src/config/.env",
  });
}
const cookieParser = require("cookie-parser");
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.get("/", (req, res) => {
  return res.send("Welcome to backend");
});

app.use("/user", userRouter);
app.use("/product", productRouter);
// connecting the database and running the server
module.exports = app;
