const express = require('express')

const { homeView } = require('../controllers/userController')


const router = express.Router()

router.get('/', homeView)


module.exports = router;

