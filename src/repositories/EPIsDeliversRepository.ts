import {EntityRepository,Repository} from 'typeorm'

import {EPIdeliver} from '../entities/EPIdeliver'

@EntityRepository(EPIdeliver)
class EPIdeliversRepository extends Repository<EPIdeliver> {
    
}

export {EPIdeliversRepository}