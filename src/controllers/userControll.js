import { clientPg } from "../db/postgres.js";

export async function userMeControll(req, res){
    const { idUser } = res.locals.verifyTokenResult;

    try {

        const { rows: findUserData } = await clientPg.query(`
        SELECT users.id, users.name, SUM("shortenUrls".views) as "visitCount"
        FROM users
        JOIN "shortenUrls"
        ON "shortenUrls"."fromUserId" = users.id
        WHERE users.id = $1
        GROUP BY users.id`, [idUser]);
    
        if(findUserData.length < 1){
            res.sendStatus(404);
        }
        
        const { rows: findShortUrlsFromUser } = await clientPg.query(`
        SELECT id, "shortUrl", url, views as "visitCount"
        FROM "shortenUrls"
        WHERE "fromUserId" = $1;
        `, [idUser]);

        res.status(200).send( { ...findUserData[0], shortenedUrls: findShortUrlsFromUser} );

    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

}