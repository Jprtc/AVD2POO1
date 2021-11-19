import {EntityRepository,Repository} from 'typeorm'
import {EPI} from '../entities/EPI'

@EntityRepository(EPI)
class EPIsRepository extends Repository<EPI> {
    
}

export {EPIsRepository}