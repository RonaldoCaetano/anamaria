import express from 'express'

import UsersController from './controllers/UsersController'
import SMSController from './controllers/SMSController'

const routes = express.Router()
const usersController = new UsersController()
const smsController = new SMSController()

routes.get('/users', usersController.index)
routes.get('/user/:telefone', usersController.show)
routes.post('/user', usersController.create)
routes.post('/token', smsController.create)

export default routes
