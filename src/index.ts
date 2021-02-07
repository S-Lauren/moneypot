const cors = require('cors');
import express = require("express");
import bodyParser = require("body-parser");

import { Connection, createConnection, getConnectionOptions, getRepository, Repository } from "typeorm";

import { Groupe } from "./entity/Groupe";
import { Expense } from "./entity/Expense";
import { Category } from "./entity/Category";
import { split } from "./services/groupService";
import { Member } from "./entity/Member";



const groupRoutes = require("./routes/groupRoutes")

const port = process.env.PORT || 3000; 

export const app: express.Application = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api/groupe', groupRoutes);
createConnection().then(async connection => {
  
// REPOS/// 
    const expenseRepo = await getRepository(Expense); 
    const catRepo = await getRepository(Category); 
    const rq = await getRepository(Groupe)
        .createQueryBuilder('groupe')
        .leftJoinAndSelect('groupe.members', 'members')
        .leftJoinAndSelect('groupe.categories', 'category')
        .leftJoinAndSelect('category.expenses', 'expense')
        .leftJoinAndSelect('expense.category', 'expenses')
        // .leftJoinAndSelect('member.expenses', 'expenses')
        .getMany()

    // console.log(await expenseRepo.find({relations: ["category", "member"]}))
    split()
//     const member2 = await getRepository(Member).findOne(2);
//     const groupe2 = await getRepository(Groupe).findOne(2, {relations: ["members"]});
// // console.log(groupe2)
//     groupe2!.members.push(member2!)
//     await getRepository(Groupe).save(groupe2!)

    for(const x of rq) {
        console.log(x)
      
    }
   
})

// API routes...



app.listen(port, () => {
    console.log(`🚀 Server Started at PORT: ${port}`);
});