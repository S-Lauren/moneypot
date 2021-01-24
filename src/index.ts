const cors = require('cors');
import  { Request, Response } from "express";
import express = require("express");
import bodyParser = require("body-parser");

import { Connection, createConnection, getConnectionOptions, getRepository, Repository } from "typeorm";
import { User } from "./entity/User";
import { Member } from "./entity/Member";
import { Groupe } from "./entity/Groupe";
import { Expense } from "./entity/Expense";

const port = process.env.PORT || 3000; 

export const app: express.Application = express();

app.use(cors());
app.use(bodyParser.json());

createConnection().then(async connection => {
  

    // find a member
    const member1 = await getRepository(Member).findOne(12);

    // Add new Expense
    // const expense = new Expense();
    // expense.amount = 10; 
    // expense!.member = member1!;
    // const expenseRepo = await getRepository(Expense);
    // await expenseRepo.save(expense)

    const repository = await connection.getRepository(Member);
    const test = await repository.findOne(12, {relations: ["expenses"]});
    console.log(test)
})


app.listen(port, () => {
    console.log(`🚀 Server Started at PORT: ${port}`);
});