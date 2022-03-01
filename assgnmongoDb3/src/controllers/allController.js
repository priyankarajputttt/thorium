const authorModel = require('../models/authorsModel')
const bookModel = require('../models/bookModel')




const createBook = async function(req,res){
    let data = req.body
    let savedData = await BookModel.create(data)
    res.send({ msg: savedData})
}

const createAuthor = async function(req,res){
    let data = req.body
    let savedData = await AuthorModel.create(data)
    res.send({ msg: savedData})
}

const bookList = async function(req,res){
    let books = await authorModel.find({authorName:"Chetan Bhagat"})
    let id = books[0].authorId
    let display = await bookModel.find({authorId:id}).select()
    res.send({msg:display})
}

const changePrice = async function(req,res){
    let book = await bookModel.find({name: "Two states"})
    let id = book[0].authorId
    let author = await authorModel.find({authorId:id}) .select({authorName:1})

    let bookN = book[0].name
    let updatedPrice = await bookModel.findOneAndUpdate({name:bookN},{price:100},{new:true})
    res.send({msg:updatedPrice})
}

const authorNames = async function(req,res){
    let books = await bookModel.find({price:{$gte:50, $lte:100}}).select({authorId:1})
    let id = books.map(ele => ele.authorId)

    let arr =[]
    for(i=0; i<id.length; i++){
        let x = id[i]
        let authorN = await authorModel.find({authorId:x}).select({authorName:1})
        arr.push(authorN)
    }
    const author = arr.flat()

    res.send({msg: author})
}

module.exports.createBook= createBook
module.exports.createAuthor= createAuthor
module.exports.bookList= bookList
module.exports.changePrice= changePrice
module.exports.authorNames= authorNames