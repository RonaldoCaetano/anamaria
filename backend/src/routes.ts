import express from 'express'

import UsersController from './controllers/UsersController'

const routes = express.Router()
const usersController = new UsersController()

routes.get('/users', usersController.index)
routes.get('/user/:email', usersController.show)
routes.post('/user', usersController.create)

export default routes
