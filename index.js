const express = require("express");
const mongoose = require("mongoose");
const app = express();

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
  res.send("Student API Updated");
});
