const express = require('express');
const router = express.Router();
const obj=require('./logger')
const lapp=require('./logger2')
const map=require('./helper')

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
    obj.sanju
    console.log(obj.tpn)
    lapp.abc
    map.k
    map.h
    map.priyanka
    
});



router.get('/movies',function (req,res){
    res.send(['pushpa',"delhi",'luck','shiddat'])
})






router.get('/movies/:id',function(req,res){
    let a=['pushpa','delhi','luck','shiddat']
    let movie=req.params.id
    res.send(a[movie])
})

router.get('/movies/:id',function(req,res){
    let b=["pushpa","delhi","luck",'shiddat']
    let movie=req.params.id
    if(movie>b.length-1){
        res.send('no')
    }else{
        res.send(b[movie])
    }
})


router.get('/films/:id',function(req,res){
    let movie=[{
        'id':1,
        name:"The shining"
    },{
        "id":2,
        name:'incendies'
    },{
        "id":3,
        name:'rang de basanti'
    },{
        "id":4,
        name:"finding demo"
    }]


    let value=req.parames.id
    res.send(movie)

       
    
       
})





router.get('/films/:filmId', function(req,res){
    let films = [ {
        id: 1,
        name: "The Shining"
       }, {
        id: 2,
        name: "Incendies"
       }, {
        id: 3,
        name: "Rang de Basanti"
       }, {
        id: 4,
        name: "Finding Demo"
       }]
    let values = req.params.filmId;
    if(values>films.length-1){
        res.send(" No movie exists with this id")
    }else{
        res.send(films[values])
    }

})
const usercontroller = require("../controller/userController");

router.post("/createNewBook", usercontroller.createNewBook); //accessing this function from usercontroller.js

router.get("/getBookList", userController.getBookList); //accessing this function from usercontroller.js

module.exports = router;


const express = require('express');
const router = express.Router();

const BookController= require("../controllers/bookController")



router.post("/createBook", BookController.createBook)

router.get("/bookList", BookController.bookList)

router.post("/getBooksInYear", BookController.getBooksInYear)

router.post("/getParticularBooks", BookController.getParticularBooks)

router.get("/getXINRBooks", BookController.getXINRBooks)

router.get("/getRandomBooks", BookController.getRandomBooks)







module.exports = router;





 





module.exports = router;