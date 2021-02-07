const { addGroupe } = require ('./../services/groupService');


import { Groupe } from './../entity/Groupe';
import { Connection, getRepository } from "typeorm";
import { Request, Response } from 'express';
import { Category } from './../entity/Category';
import { Param } from 'typescript-rest';


// GET: api/groupes
export const findAllGroups = async (req: Request, res: Response) => {
        try {
            const allGroups: Groupe[] = await getRepository(Groupe).find({ relations: ["members", "categories"]});
            res.status(200).json(allGroups!)
        } catch (err) {
            if (err) {
                res.status(500).json(err)
            }
        }
    }
// POST: api/groupe
export const createGroup = async (req: Request, res: Response) => {
    try {
        const { name } = req.body;
        await addGroupe(name)
        res.sendStatus(201); 
   
    } catch (err) {
        res.status(500).json(err)
    }
}
export const deleteGroup = async (req: Request, res: Response) => {
    try {
        const groupeId = await getRepository(Groupe).delete(req.params.id);
        res.status(200).json(groupeId);
    } catch (err) {
        if (err) {
            res.status(500).json(err)
        }
    }
}

export const updateGroup = async (req: Request, res: Response) => {
    try {
        const groupeId = await getRepository(Groupe).findOne(req.params.id);
        groupeId!.name = req.body.name; 
        await getRepository(Groupe).save(groupeId!)
        res.status(200).json(groupeId);
    } catch (err) {
        if (err) {
            res.status(500).json(err)
        }
    }
}

