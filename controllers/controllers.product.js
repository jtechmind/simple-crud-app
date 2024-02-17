const Product = require("../models/product.models");

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

module.exports = {
  getProduct,
  createProduct,
};
