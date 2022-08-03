import { clientPg } from "../db/postgres.js";
import { nanoid } from 'nanoid';

export async function urlShortenControll (req, res){
    const shortenUrlCode = nanoid();
    const { userEmail } = res.locals.verifyTokenResult;

    try {
        const { rows: userId } = await clientPg.query(`SELECT id FROM users WHERE email = $1`, [userEmail]);
        
        await clientPg.query(`
        INSERT INTO "shortenUrls" ("fromUserId", "shortenUrlCode")
        VALUES ($1, $2)`,
        [userId[0].id, shortenUrlCode]);

        res.status(201).send( {shortUrl: shortenUrlCode} );
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}