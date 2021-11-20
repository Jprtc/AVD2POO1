import {getCustomRepository} from 'typeorm'
import { EmployeesRepository } from '../repositories/EmployeesRepository'
import {EPIsdeliversRepository} from '../repositories/EPIsDeliversRepository'
import { EPIsRepository } from '../repositories/EPIsRepository'

interface IDeliversServiceCreate{
    employee_id:string;
    epi_id:string;
    delivery_date:Date;
    delivered_quantity:number;
}

interface IDeliversID{
    id:string;
}

interface IDeliversServiceUpdate{
    id:string;
    employee_id:string;
    epi_id:string;
    delivery_date:Date;
    delivered_quantity:number;
}

class EPIDeliversService{
    async create({employee_id,epi_id,delivery_date,delivered_quantity}: IDeliversServiceCreate){
        const deliverService = getCustomRepository(EPIsdeliversRepository)

        const employeeRepository = getCustomRepository(EmployeesRepository)
        const epiRepository = getCustomRepository(EPIsRepository)

        //Só assim pra funcionar corretamente msm
        const employee = await employeeRepository.findOne({id: employee_id});
        const epi = await epiRepository.findOne({id: epi_id});
        
        // console.log(employee)
        // console.log(epi)

        if(!employee){
            throw new Error("Não há funcionário com esse id");
        }
        if(!epi){
            throw new Error("não há epi com esse ID");
        }

        const delivers = deliverService.create({employee_id,epi_id,delivery_date,delivered_quantity})
        // console.log(delivers)
        await deliverService.save(delivers)
        return delivers
    }

    async index(){
        const deliverService = getCustomRepository(EPIsdeliversRepository)
            const delivers = await deliverService.find({
                relations:['employee','epi']
            })

            if(delivers.length<=0){
            throw new Error('Não há entregas cadastradas')
            }
            return delivers
    }

    async delete({id}: IDeliversID){
        const deliverService = getCustomRepository(EPIsdeliversRepository)

        const delivers = await deliverService.findOne({id})

        if(!delivers){
            throw new Error('Não há entregas com esse ID registradas')
        }
        
        return await deliverService.delete({id})
    }

    async update({id,employee_id,epi_id,delivery_date,delivered_quantity}:IDeliversServiceUpdate){
        const deliverService = getCustomRepository(EPIsdeliversRepository)
        const employeeRepository = getCustomRepository(EmployeesRepository)
        const epiRepository = getCustomRepository(EPIsRepository)

        const delivers = await deliverService.findOne({id})

        if(!delivers){
            throw new Error('Não há entregas com esse ID registrada')
        }

        const employee = await employeeRepository.findOne({id: employee_id});
        const epi = await epiRepository.findOne({id: epi_id});

        if(!employee){
            throw new Error("Não há funcionário com esse id");
        }
        if(!epi){
            throw new Error("não há epi com esse ID");
        }

        await deliverService.update(id,{employee_id,epi_id,delivery_date,delivered_quantity})
        const updatedDelivers = await deliverService.findOne({id})
        return updatedDelivers
    }
    
}

export {EPIDeliversService}
