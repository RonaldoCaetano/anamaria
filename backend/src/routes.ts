import express from 'express'

import UsersController from './controllers/UsersController'
import SMSController from './controllers/SMSController'
import SOSNumbersController from './controllers/SOSNumbersController'

const routes = express.Router()
const usersController = new UsersController()
const smsController = new SMSController()
const sosController = new SOSNumbersController()

routes.get('/users', usersController.index)
routes.get('/user/:telefone', usersController.show)
routes.post('/user', usersController.create)
routes.post('/token', smsController.create)

routes.get('/sos/:estado', sosController.show)

export default routes
