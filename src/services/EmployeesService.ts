import {getCustomRepository} from 'typeorm'
import {EmployeesRepository} from '../repositories/EmployeesRepository'

interface IEmployeesCreate{
    name: string;
    cpf: string;
    role: string;
}

class EmployeesService{
    async create({name,cpf,role}:IEmployeesCreate){
        const employeesRepository = getCustomRepository(EmployeesRepository)

        const cpfExists = await employeesRepository.findOne({cpf})

        if(cpfExists){
            throw new Error('CPF já registrado, por favor insira outro cpf')
        }

        const employees = employeesRepository.create({name,cpf,role})

        if(!name||!cpf||!role){
            throw new Error('Todos os campos precisam ser preenchidos!')
        }

        await employeesRepository.save(employees)

        return employees
    }
}

export {EmployeesService}