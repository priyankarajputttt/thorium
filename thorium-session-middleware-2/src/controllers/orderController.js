const orderModel = require("../models/orderModel");

const createOrder = async function (req, res) {
  let data = req.body;
  let createData = await orderModel.create(data);
  console.log(req.newAtribute);
  res.send(createData);
};

module.exports.createOrder = createOrder




