const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.models");
const routes = require("./routes/routes.product.js");
const connectDB = require("./database/db.js");
const app = express();
app.use(express.json());

app.listen(3200, () => {
  console.log(`server is running on port 3200`);
});

// Database onnection
connectDB();

// Product API Router
app.use("/api/v1/product", routes);
