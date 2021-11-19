import {Entity, PrimaryColumn,Column, UpdateDateColumn, CreateDateColumn, JoinColumn, ManyToOne} from 'typeorm'
import {v4 as uuid} from 'uuid'

import {Employee} from './Employee'
import {EPI} from './EPI'

@Entity('EPIdelivery')
class EPIdeliver{

    @PrimaryColumn()
    id: string

    @JoinColumn({name:'employee_id'})
    @ManyToOne(() => Employee)
    employee: Employee

    @Column()
    employee_id: string

    @JoinColumn({name:'epi_id'})
    @ManyToOne(() => EPI)
    epi: EPI

    @Column()
    EPI_id: string

    @Column()
    delivery_date:Date

    @Column()
    delivered_quantity:number

    @UpdateDateColumn()
    updated_at:Date

    @CreateDateColumn()
    created_at:Date

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
}

export {EPIdeliver}