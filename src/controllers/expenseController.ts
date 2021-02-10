import { Request, Response } from 'express';
import { Expense } from "./../entity/Expense";
import { getRepository } from "typeorm"
import { Category } from './../entity/Category';
import { Member } from './../entity/Member';



// POST : api/expense/member
export const addExpense = async(req: Request, res: Response) => {
    // create expense
    try {
    const expenseRepo = await getRepository(Expense); 
    const expense = new Expense(); 
    expense!.amount = req.body.amount; 
    expense.member = req.body.member; 
    expense.category = req.body.category;
    await expenseRepo.save(expense); 
    res.status(200).json(expense)
    } catch(e) {
        console.log(e)
        res.status(500).json(e)
    }

}

// GET : api/expense
export const findAllExpenses = async (req: Request, res: Response) => {
    try {
        const expenseRepo: Expense[] = await getRepository(Expense).find({ relations: ["category", "member"] })
        res.status(200).json(expenseRepo!)
    } catch (e) {
        console.log(e)
        res.status(500).json(e)
    }

}