import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, ManyToOne } from "typeorm";
import { Groupe } from "./Groupe";
import { Member } from "./Member";

@Entity()
export class Expense {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    amount: number;

    @ManyToOne(() => Member, member => member.expenses)
    member: Member;

}