import {Entity, PrimaryColumn,Column, UpdateDateColumn, CreateDateColumn} from 'typeorm'
import {v4 as uuid} from 'uuid'

@Entity('EPIs')
class EPI{

    @PrimaryColumn()
    id: string

    @Column()
    name:string

    @Column()
    expiration_days:number

    @Column()
    CA_number:number

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

export {EPI}