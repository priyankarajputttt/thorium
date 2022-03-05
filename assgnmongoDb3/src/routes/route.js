const express = require('express');

const router = express.Router();


const allController = require('../controllers/allController')



router.post('/createAuthor', allController.createAuthor)
router.post('/createBook', allController.createBook)
router.get('/bookList', allController.bookList)
router.get('/changePrice', allController.changePrice)
router.get('/authorNames', allController.authorNames)





router.get("/home", function (req, res) {
    res.send("My home page")
} )

router.get("/login",function (req, res) {
    res.send("you logged successfully")
} )

router.get("/todaysFeed", function (req, res) {
    res.send("todays feed include following")
})







module.exports = router;