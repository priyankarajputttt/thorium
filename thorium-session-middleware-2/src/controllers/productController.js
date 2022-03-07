const productModel = require("../models/productModel");

const createProduct = async function (req, res) {
  let data = req.body;
  let createData = await productModel.create(data);
  console.log(req.newAtribute);
  res.send(createData);
};

module.exports.createProduct = createProduct;


