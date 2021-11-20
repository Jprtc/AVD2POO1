import { Router } from 'express'
import { EmployeesController } from './controllers/EmployeesController';
import {EPIsController } from './controllers/EPIsController';
import { EPIDeliversController } from './controllers/EPIDeliversController';
const routes = Router();

const employeesController = new EmployeesController();
const episController = new EPIsController();
const epiDeliversController = new EPIDeliversController();

routes.post('/funcionarios', employeesController.create)

routes.post('/epi',episController.create)

routes.post('/entregaepi',epiDeliversController.create)

routes.get('/entregaepi',epiDeliversController.index)
routes.delete('/entregaepi/:id',epiDeliversController.delete)
routes.put('/entregaepi/:id',epiDeliversController.update)




export { routes }

