import {Entity, PrimaryColumn,Column, UpdateDateColumn, CreateDateColumn} from 'typeorm'
import {v4 as uuid} from 'uuid'

@Entity('employees')
class Employee{

    @PrimaryColumn()
    id: string

    @Column()
    name:string

    @Column()
    cpf:string

    @Column()
    role:string

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

export {Employee}