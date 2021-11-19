import {getCustomRepository} from 'typeorm'
import {EPIsRepository} from '../repositories/EPIsRepository'

interface IEPICreate{
    name: string;
    expiration_days:number;
    CA_number: number;
}

class EPIService{
    async create({name,expiration_days,CA_number}:IEPICreate){
        const epiRepository = getCustomRepository(EPIsRepository)

        const caExists = await epiRepository.findOne({CA_number})

        if(caExists){
            throw new Error('Numero de CA já registrado, por favor insira um valido')
        }

        const epis = epiRepository.create({name,expiration_days,CA_number})

        await epiRepository.save(epis)

        return epis
    }
}

export {EPIService}