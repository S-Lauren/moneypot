import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, ManyToOne } from "typeorm";
import { Category } from "./Category";
import { Member } from "./Member";

@Entity()
export class Expense {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    amount: number;

    @ManyToOne(() => Member, member => member.expenses)
    member: Member;

    // Many expenses belongs to one category... 
    @ManyToOne(() => Category, category => category.expenses)
    category: Category;

}