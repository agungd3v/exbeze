const router = require("express").Router()

const userRts = require('./context/userRts')

router.use('/user', userRts)

module.exports = router