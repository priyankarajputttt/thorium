
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
  try {
    let data = req.body;
    if (Object.keys(data).length > 0) {
      let user = await userModel.create(req.body);
      res.status(201).send({ status: true, msg: user });
    } else {
      res.status(400).send({ error: "Please provide input data" });
    }
  } catch (error) {
        res.status(500).send({ error: error.message });
  }
};

const userLogin = async function (req, res) {
  try {
    let userName = req.body.emailId;
    let password = req.body.password;

    if (userName && password) {
      let user = await userModel.findOne({
        emailId: userName,
        password: password,
      });
      if (!user)
        return res
          .status(404)
          .send({ status: false, msg: "username or password is incorrect " });

      let userToken = jwt.sign({ userId: user._id.toString() }, "SurajDubey");

      res.status(200).send({ status: true, msg: userToken });
    } else {
      res.status(400).send({ status: false, error: "Please provide user inputs" });
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const getUser = async function (req, res) {
  try{

    let id = req.params.userId;
    let userById = await userModel.findById(id);
    
      res.status(200).send({ status: true, msg: userById });
    
  }catch (error) {
    res.status(500).send({error: error.message})
  }
};

const updateUserData = async function (req, res) {
  try{
  let id = req.params.userId;
  let data = req.body;
  if(Object.keys(data).length > 0){

    let updateUser = await userModel.findByIdAndUpdate(
      { _id: id },
      { $set: data },
      { new: true }
    );
    res.status(200).send({ status: true, msg: updateUser });
  }else{
    res.status(400).send({status : false, msg: "provide input data"})
  }
  }
  catch (error) {
    res.status(500).send({error : error.message})
  }
};

const deleteUserData = async function (req, res) {
  try {

    let id = req.params.userId;
    let deleteUser = await userModel.findByIdAndUpdate(
      { _id: id },
      { $set: { isDeleted: true } },
      { new: true }
      );
      res.status(201).send({ status: true, msg: deleteUser })
    }catch (error){
        res.status(500).send({error :error.message})
    }
  }
    

module.exports.createUser = createUser;
module.exports.userLogin = userLogin;
module.exports.getUser = getUser;
module.exports.updateUserData = updateUserData;
module.exports.deleteUserData = deleteUserData;

  