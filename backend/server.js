/* eslint-disable no-undef */

require("dotenv").config();
const path = require("path");
// ******************** APP ********************

const express = require("express");
const app = express();
app.use("/images", express.static(path.join(__dirname, "images")));

// ******************** CORS ********************

const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:5173",
    status: 200,
  }),
);

// ******************** ROUTES ********************

app.use("/api/v1/data", require("./routes/dataRoutes"));
app.use("/api/v1/category/", require("./routes/categoryRoutes"));
app.use("/api/v1/product/", require("./routes/productRoutes"));

// ******************** SERVER ********************

const portNumber = process.env.PORT_NUMBER || 3000;
app.listen(portNumber, () => console.log(`Listening on port ${portNumber}`));
