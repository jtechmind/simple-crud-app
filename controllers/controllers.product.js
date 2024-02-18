const Product = require("../models/product.models.js");

const express = require("express");
const app = express();
app.use(express.json());

const getProduct = async (req, res, next) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createProduct = async (req, res, next) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(200).json(newProduct);
    // console.log(newProduct);
  } catch (error) {
    next(error);
  }
};

const getProductById = async (req, res, next) => {
  try {
    const { productId } = req.params;
    const product = await Product.findOne(productId);
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};
const updateProduct = async (req, res, next) => {
  try {
    const { productId } = req.params;
    const product = await Product.findOneAndUpdate(productId, req.body);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    } else {
      const updatedproduct = await Product.findOne(productId);
      res.status(200).json(updatedproduct);
    }
  } catch (error) {
    next(error);
  }
};
module.exports = {
  getProduct,
  createProduct,
  getProductById,
  updateProduct,
};
