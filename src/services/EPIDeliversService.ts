import {getCustomRepository} from 'typeorm'
import {EPIsdeliversRepository} from '../repositories/EPIsDeliversRepository'

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

        // const employee = await deliverService.findOne({employee_id})
        // const epi = await deliverService.findOne({epi_id})
        // if(!employee){
        //     throw new Error('Id do funcionário inválido!')
        // }
        // if(!epi){
        //     throw new Error('Id do epi inválido!')
        // }
        const delivers = deliverService.create({employee_id,epi_id,delivery_date,delivered_quantity})


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

        const delivers = await deliverService.findOne({id})
        const employee = await deliverService.findOne({employee_id})
        const epi = await deliverService.findOne({epi_id})

        if(!delivers){
            throw new Error('Não há entregas com esse ID registrada')
        }
        if(!employee){
            throw new Error('Não há funcionários com esse ID registrada')
        }
        if(!epi){
            throw new Error('Não há epis com esse ID registrada')
        }

        await deliverService.update(id,{employee_id,epi_id,delivery_date,delivered_quantity})
        const updatedDelivers = await deliverService.findOne({id})
        return updatedDelivers
    }
    
}

export {EPIDeliversService}