const productControllers = require("../controllers/controllers.product.js");

const express = require("express");
const routes = express.Router();

routes.get("/", productControllers.getProduct);
routes.post("/", productControllers.createProduct);
routes.get("/:_id", productControllers.getProductById);
routes.put("/:_id", productControllers.updateProduct);
routes.delete("/:_id", productControllers.deleteProduct);
// routes.get("/:id", products);

module.exports = routes;
