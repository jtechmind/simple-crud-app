const productControllers = require("../controllers/controllers.product.js");

const express = require("express");
const routes = express.Router();

routes.get("/", productControllers.getProduct);
routes.post("/", productControllers.createProduct);
routes.get("/:id", productControllers.getProductById);
routes.put("/:id", productControllers.updateProduct);
// routes.get("/:id", products);

module.exports = routes;
