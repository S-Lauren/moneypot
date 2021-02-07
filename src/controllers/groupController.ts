const { addGroupe } = require ('./../services/groupService');


import { Groupe } from './../entity/Groupe';
import { getRepository } from "typeorm";
import { Request, Response } from 'express';
import { addMemberToGroupe } from './../services/groupService';
import { Member } from './../entity/Member';


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
// api/groupe/id/
export const sendInvitationLink = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const memberId = req.params.memberId;
        await addMemberToGroupe(memberId,id)
        res.sendStatus(201);
    } catch (err) {
        if (err) {
            console.log(err)
            res.status(500).json(err)
        }
    }
}

