import { Entity, PrimaryGeneratedColumn, Column, JoinTable, ManyToMany } from "typeorm";
import { Member } from "./Member";

@Entity()
export class Groupe {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

   // relation 
   // plus members belongs to many groupes
    @ManyToMany(() => Member, {cascade: true})
    @JoinTable()
    members: Member[];
}