import {Request,Response} from 'express'
import {EmployeesService} from '../services/EmployeesService'

class EmployeesController{
    async create(request: Request, response: Response){
        const {name,cpf,role} = request.body

        const employeeService = new EmployeesService();

        try {
            const employees = await employeeService.create({name,cpf,role})
            return response.json(employees)
            
        } catch (error) {
            return response.status(400).json({message: error.message})
        }

    }
}

export {EmployeesController}