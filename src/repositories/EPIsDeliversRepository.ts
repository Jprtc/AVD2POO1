import {EntityRepository,Repository} from 'typeorm'

import {EPIdeliver} from '../entities/EPIdeliver'

@EntityRepository(EPIdeliver)
class EPIsdeliversRepository extends Repository<EPIdeliver> {
    
}

export {EPIsdeliversRepository}