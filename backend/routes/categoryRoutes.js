const express = require("express");
const asyncHandler = require("express-async-handler");
const path = require("path");
const fs = require("fs");

const router = express.Router();

router.get(
  "/:category",
  asyncHandler(async (req, res, next) => {
    const { category } = req.params;

    if (
      category !== "headphones" &&
      category !== "earphones" &&
      category !== "speakers"
    ) {
      return res
        .status(404)
        .json({ message: "This category does not exist", stauts: 404 });
    }

    try {
      const data = fs.readFileSync(
        path.join(__dirname, "..", "data", "data.json"),
      );

      const products = JSON.parse(data).filter(
        (product) => product.category === category,
      );

      return res.status(200).json(products);
    } catch (error) {
      next(error);
    }
  }),
);

module.exports = router;
