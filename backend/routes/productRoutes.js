const express = require("express");
const asyncHanlder = require("express-async-handler");
const path = require("path");
const fs = require("fs");

const router = express.Router();

router.use(
  "/:slug",
  asyncHanlder(async (req, res, next) => {
    const { slug } = req.params;

    try {
      const data = fs.readFileSync(
        path.join(__dirname, "..", "data", "data.json"),
      );

      const product = JSON.parse(data).find((product) => product.slug === slug);

      console.log(JSON.stringify(product, null, 2));

      if (!product) {
        return res.status(404).json({
          message: "Product that you are looking for does not exists",
          status: 400,
        });
      }

      return res.status(200).send(product);
    } catch (error) {
      next(error);
    }
  }),
);

module.exports = router;
