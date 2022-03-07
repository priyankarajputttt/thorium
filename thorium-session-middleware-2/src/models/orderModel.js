const mongoose = require('mongoose')
const orderSchema = new mongoose.Schema({
    _id: String,
userId:String, 
productId:String,
amount:Number,
isFreeAppUser: Boolean, 
date:String 


})


