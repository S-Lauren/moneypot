import { Entity, PrimaryGeneratedColumn, Column, JoinTable, ManyToMany, OneToMany } from "typeorm";
import { Category } from "./Category";
import { Member } from "./Member";

@Entity()
export class Groupe {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToMany(() => Member, {cascade: true})
    @JoinTable()
    members: Member[];


   
    
     // A Group can have many category... 

     @OneToMany(() => Category, category =>  category.groupe)
     categories: Category[]
}