const productModel = require("../models/productModel");

const midware = async function (req, res, next) {
    if (!req.header["IsFreeAppUser"]) {
      res.send("header not present");
    }
  };
  

