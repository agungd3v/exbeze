const user = require('../models/user')
const { response } = require('../helpers/response')

const userController = {
  index: async (req, res) => {
    try {
      const data = await user.findAll()
      return response(res, data)
    } catch (error) {
      return response(res, error.message, +401)
    }
  },
  store: async (req, res) => {
    try {
      const store = await user.create(req.body)
      return response(res, store)
    } catch (error) {
      return response(res, error.message, +401)
    }
  },
  show: async (req, res) => {
    try {
      const data = await user.findByPk(req.params.id)
      return response(res, data)
    } catch (error) {
      return response(res, error.message, +401)
    }
  },
  update: async (req, res) => {
    try {
      await user.update(req.body, {where: {id: req.params.id}})
      return response(res, 'user updated')
    } catch (error) {
      return response(res, error.message, +401)
    }
  },
  delete: async (req, res) => {
    try {
      await user.destroy({where: {id: req.params.id}})
      return response(res, 'user deleted')
    } catch (error) {
      return response(res, error.message, +401)
    }
  }
}

module.exports = userController