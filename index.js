const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.models");
const routes = require("./routes/routes.product.js");
const connectDB = require("./database/db.js");
const app = express();
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://jaikumarsoft:backend1418@backenddb.fvjgkqr.mongodb.net/Node-API?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("MongoDB Connected");
  });

app.listen(3200, () => {
  console.log(`server is running on port 3200`);
});

app.get("/", (req, res) => {
  res.send({ message: "message from node server" });
});

app.get("/api/v1/student", (req, res) => {
  res.send("Student API Test:");
});

app.post("/api/v1/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
    // res.send(req.body);/
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
app.use("/api/v1/product", routes);

connectDB();
