const express        = require('express')
const router         = express.Router()
const homeController = require('./controller/homeController')

router.get('/', (req,res) => {homeController.hello2(req,res)})
router.get('/name', (req,res) => {homeController.getName(req,res)})

module.exports = router