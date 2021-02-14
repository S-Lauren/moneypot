import { Groupe } from './../entity/Groupe';
import { getRepository } from 'typeorm';
import { Expense } from './../entity/Expense';
import { Member } from './../entity/Member';


let debt: any = []
   export const split =  async(groupeId: string, categoryId: string)  => {

        // retrieve category with expenses
       const membersGroup = await getRepository(Groupe).findOne(groupeId, {relations: ["members"]});
        const nbMembers = membersGroup!.members.length; 
        // retrieve expense 
  
       const getExpense = await getRepository(Expense)
           .createQueryBuilder("expense")
           .where("categoryId = :id", { id: categoryId })
           .getMany();

       const getAmount: any = getExpense.map(x => x.amount);
       const totalSplit: number = getAmount / nbMembers; 
   
        membersGroup!.members.forEach(x => {
            return debt.push({ memberId: x.id, totalSplit: totalSplit})
        })

       return debt; 
 
    }


export const addGroupe = async (groupeName: string) => {
    const groupeRepo = await getRepository(Groupe);
    const groupe = new Groupe()
    groupe!.name = groupeName;
    await groupeRepo.save(groupe);
}

export const addMemberToGroupe = async (memberId: string, groupeId: string) => {

    const member2 = await getRepository(Member).findOne(memberId);
    const groupe2: any = await getRepository(Groupe).findOne(groupeId, { relations: ["members"] });
    groupe2.members.push(member2!)
    await getRepository(Groupe).save(groupe2)
}

