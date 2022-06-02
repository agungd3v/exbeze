const rts = require("express").Router()

const userController = require('../../controllers/userController')

rts.get('', userController.index)
rts.post('', userController.store)
rts.get('/:id', userController.show)
rts.put('/:id', userController.update)
rts.delete('/:id', userController.delete)

module.exports = rts