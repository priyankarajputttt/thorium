const express = require('express');

const router = express.Router();


const allController = require('../controllers/allController')



router.post('/createAuthor', allController.createAuthor)
router.post('/createBook', allController.createBook)
router.get('/bookList', allController.bookList)
router.get('/changePrice', allController.changePrice)
router.get('/authorNames', allController.authorNames)

module.exports = router;