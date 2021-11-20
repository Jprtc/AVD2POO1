import {Request,Response} from 'express'
import {EPIDeliversService} from '../services/EPIDeliversService'

class EPIDeliversController{
    async create(request: Request, response: Response){
        let {employee_id,epi_id,delivery_date,delivered_quantity} = request.body

        const epiDeliversService = new EPIDeliversService()
        delivery_date = new Date(delivery_date)

        try {
            const epiDelivers = await epiDeliversService.create({employee_id,epi_id,delivery_date,delivered_quantity})
            return response
                .status(200)
                .json(epiDelivers)
        } catch (error) {
            return response
            .status(400)
            .json({message:error.message})
        }
    }

    async index(request: Request, response: Response){
        const epiDeliversService = new EPIDeliversService()

        try {
            const epiDelivers = await epiDeliversService.index()
            return response.status(200).json(epiDelivers)
        } catch (err) {
            return response
                .status(400)
                .json({mensagem: err.message})
        }
    }

    async delete(request: Request, response: Response){
        const epiDeliversService = new EPIDeliversService();
        const {id} = request.params;

        try {
            const epiDelivers = await epiDeliversService.delete({id})
            return response.status(200).json({message: 'Entrega excluida com sucesso!'})
        } catch (error) {
            return response.status(400).json({mensagem: error.message})
        }
    }

    async update(request: Request, response: Response){
        let {employee_id,epi_id,delivery_date,delivered_quantity} = request.body
        delivery_date = new Date(delivery_date)
        const {id} = request.params;

        const epiDeliversService = new EPIDeliversService();

        try {
            const delivers = await epiDeliversService.update({id,employee_id,epi_id,delivery_date,delivered_quantity})
            return response.status(200).json(delivers)
        } catch (error) {
            return response.status(400).json({mensagem: error.message})
        }
    }

}

export {EPIDeliversController}