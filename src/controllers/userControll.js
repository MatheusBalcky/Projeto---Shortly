import { userRepo } from "../repositories/userRepo.js";

export async function userMeControll(req, res){
    const { idUser } = res.locals.verifyTokenResult;

    try {

        const result = await userRepo.getUserData(idUser);
        
        if(!result.id){
            return res.sendStatus(404);
        }

        return res.status(200).send( result );

    } catch (error) {

        console.log(error);
        res.sendStatus(500);
        
    }
}