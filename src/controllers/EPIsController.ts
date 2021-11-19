import {Request,Response} from 'express'
import {EPIService} from '../services/EPIService'

class EPIsController{
    async create(request: Request, response: Response){
        const {name,expiration_days,CA_number} = request.body

        const epiService = new EPIService();

        try {
            const epis = await epiService.create({name,expiration_days,CA_number})
            return response.json(epis)
            
        } catch (error) {
            return response.status(400).json({message: error.message})
        }
    }
}

export {EPIsController}