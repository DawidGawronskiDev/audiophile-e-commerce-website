const express = require("express");
const asyncHanlder = require("express-async-handler");
const path = require("path");
const fs = require("fs");

const router = express.Router();

router.use(
  "/",
  asyncHanlder(async (req, res, next) => {
    try {
      const data = fs.readFileSync(
        path.join(__dirname, "..", "data", "data.json"),
      );
      res.status(200).send(JSON.parse(data));
    } catch (error) {
      next(error);
    }
  }),
);

module.exports = router;
