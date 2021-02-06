
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Expense } from "./Expense";
import { Groupe } from "./Groupe";

@Entity()
export class Category {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    // A category can have many expenses.... 

    @OneToMany(() => Expense, expense => expense.category)
    expenses: Expense[];

   

     // Many category belongs to a a group
    @ManyToOne(() => Groupe, groupe => groupe.categories )
    groupe: Groupe; 

}