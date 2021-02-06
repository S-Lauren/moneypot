import { Groupe } from './../entity/Groupe';
import { Connection, getRepository } from "typeorm";
import { Request, Response } from 'express';




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


