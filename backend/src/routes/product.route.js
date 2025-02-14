// route
const multer = require("multer");
const upload = multer({ dest: "temp-uploads/" });
const express = require("express");
const {
  createProductController,
  getProductDataController,
  updateProductDataController,
  getSingleProductDocumentController,
  deleteSingleProduct,
} = require("../controllers/product.controller.js");
const { verifyUserController } = require("../controllers/user.controller.js");
const router = express.Router();

router.post(
  "/create-product",
  upload.array("files", 5),
  verifyUserController,
  createProductController
);

router.get("/get-products", getProductDataController);

router.put(
  "/update-products/:id",
  upload.array("files", 5),
  updateProductDataController
);

router.get("/get-products", getProductDataController);

router.get("/get-single/:id", getSingleProductDocumentController);
router.delete("/:id", deleteSingleProduct);

module.exports = router;
