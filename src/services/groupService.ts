import { Groupe } from './../entity/Groupe';
import { getRepository } from 'typeorm';
import { Expense } from './../entity/Expense';



   export const split =  async()  => {

        // retrieve category with expenses
        const membersGroup = await getRepository(Groupe).findOne(2, {relations: ["members"]});
        const nbMembers = membersGroup!.members.length; 
        // retrieve expense 
       const getExpense = await getRepository(Expense)
           .createQueryBuilder("expense")
           .where("categoryId = :id", { id: 1 })
           .getMany();

       const getAmount: any = getExpense.map(x => x.amount);
       const totalSplit: number = getAmount / nbMembers; 
     
       const getExpensePerMember =  membersGroup!.members.map(x => {
           return (
               {username: x.username,
               part: totalSplit,}
               )})

         console.log(getExpensePerMember);

    //    return ({ members: memberName, totalSplit: totalSplit})
    }
export const addGroupe = async (groupeName: string) => {
    const groupeRepo = await getRepository(Groupe);
    const groupe = new Groupe()

    groupe!.name = groupeName;
    await groupeRepo.save(groupe);
}


