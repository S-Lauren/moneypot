import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, OneToMany } from "typeorm";
import { Expense } from "./Expense";
import { Groupe } from "./Groupe";

@Entity()
export class Member {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    email: string;

    @OneToMany(() => Expense, expense => expense.member)
    expenses: Expense[];

}