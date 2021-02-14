import { Request, Response } from 'express';
import { Expense } from "./../entity/Expense";
import { getRepository } from "typeorm"
import { split } from './../services/groupService';



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

        res.status(500).json(e)
    }

}

// GET : api/expense
export const findAllExpenses = async (req: Request, res: Response) => {
    try {
        const expenseRepo: Expense[] = await getRepository(Expense).find({ relations: ["category", "member"] })
        res.status(200).json(expenseRepo!)
    } catch (e) {
        res.status(500).json(e)
    }
}
// DELETE api/expense/id
export const deleteExpenses = async (req: Request, res: Response) => {
    try {
        const {id} = req.params; 
        const expenseRepo = await getRepository(Expense).delete(id)
        res.status(200).json(expenseRepo!)
    } catch (e) {
        res.status(500).json(e)
    }
}

export const showSplitExpense = async (req: Request, res: Response) => {

    try {
        const groupeId = req.params.groupeId; 
        const categoryId = req.params.categoryId; 
        const splitJson = await split(groupeId, categoryId);
        res.status(200).json(splitJson); 
    } catch(e) {
        res.status(500).json(e)
    }
}