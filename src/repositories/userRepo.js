import { clientPg } from "../db/postgres.js";

export async function insertNewUser (name, email, password){
    return await clientPg.query(`
    INSERT INTO users (name, email, password)
    VALUES ($1, $2, $3)
    `,[name, email, password]);   
}

export async function getUserData (idUser){
    const { rows: findUser } = await clientPg.query(`
    SELECT users.id, users.name
    FROM users
    WHERE users.id = $1`, [idUser]);

    const { rows: getCountsVisit } = await clientPg.query(`
    SELECT SUM("shortenUrls".views) as "visitCount"
    FROM "shortenUrls"
    WHERE "fromUserId" = $1`, [idUser]);

    const { rows: getShortUrls } = await clientPg.query(`
    SELECT id, "shortUrl", url, views as "visitCount" FROM "shortenUrls"
    WHERE "fromUserId" = $1`, [idUser]);

    return {
        ...findUser[0],
        visitCount: getCountsVisit[0].visitCount? getCountsVisit[0].visitCount : 0  ,
        shortenedUrls: getShortUrls
    }
}




export const userRepo = {
    insertNewUser,
    getUserData
} 