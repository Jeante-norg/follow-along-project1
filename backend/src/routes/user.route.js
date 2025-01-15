const express = require("express");
const multer = require("multer");
// const upload = require("../middlewares/multer.js");
const {
  CreateUSer,
  verifyUserController,
  signup,
  login,
} = require("../controllers/user.controller.js");
const jwt = require("jsonwebtoken");
const upload = multer({ dest: "temp-uploads/" });
const router = express.Router();

router.post("/create-user", upload.single("file"), CreateUSer);
router.get("/activation/:token", verifyUserController);

// router.post("/signup", signup);
router.post("/signup", upload.single("file"), signup);
router.post("/login", login);

module.exports = router;
