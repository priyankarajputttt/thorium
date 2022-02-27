const UserModel = require("../models/UserModel.js");

const createNewBook = async function (req, res) {
  let data = req.body;
  let savedData = await UserModel.create(data);
  req.send({ msg: savedData });
};

const getBookList = async function (req, res) {
  let allUser = await UserModel.find(); // this will find the entries in the database
  req.send({ msg: allUser }); // this will send all the users in the database
};

module.exports.createNewBook = createNewBook;

module.exports.getBookList = getBookList;