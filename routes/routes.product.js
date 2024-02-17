const productControllers = require("../controllers/controllers.product.js");

const express = require("express");
const routes = express.Router();
const app = express();
app.use(express.json());

routes.get("/", productControllers.getProduct);
routes.post("/", productControllers.createProduct);
// routes.get("/:id", products);

module.exports = routes;
