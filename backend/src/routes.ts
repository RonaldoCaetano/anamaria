import express from 'express'

import UsersController from './controllers/UsersController'

const routes = express.Router()
const usersController = new UsersController()

routes.get('/users', usersController.index)

export default routes
