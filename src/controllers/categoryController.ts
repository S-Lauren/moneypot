import { Category } from "./../entity/Category"
import { getRepository } from "typeorm"
import { Request, Response } from 'express';

// POST : api/category -- Maybe Need Service to deleguate Controller...
export const createCategory = async(req: Request, res: Response) => {

    try {
        const catRepo = await getRepository(Category);
        const category = new Category()
        category!.name! = req.body.name;
        category!.groupe! = req.body.groupe; 
        await catRepo.save(category);
        res.sendStatus(200)
    } catch(e) {
        console.log(e)
        res.status(500).json(e)
    }
}


