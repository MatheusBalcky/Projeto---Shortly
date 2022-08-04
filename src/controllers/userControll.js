import { clientPg } from "../db/postgres.js";
import { queryToGetUserAndUrls } from "../db/querys.js";

export async function userMeControll(req, res){
    const { idUser } = res.locals.verifyTokenResult;

    try {

        const { rows: findUserData } = await clientPg.query(queryToGetUserAndUrls, [idUser]);
    
        if(findUserData.length < 1){
            return res.sendStatus(404);
        }
        
        const queryOrganized = {
            id: findUserData[0].id,
            name: findUserData[0].name,
            visitCount: findUserData[0].visitCount,
            shortenedUrls: findUserData.map( item => item.shortenedUrls)
        }

        return res.status(200).send( queryOrganized );

    } catch (error) {

        console.log(error);
        res.sendStatus(500);
        
    }
}