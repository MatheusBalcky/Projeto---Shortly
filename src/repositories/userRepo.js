import { clientPg } from "../db/postgres.js";

export async function insertNewUser (name, email, password){

    return await clientPg.query(`
    INSERT INTO users (name, email, password)
    VALUES ($1, $2, $3)
    `,[name, email, password]);   
}

export async function getUserData (idUser){
    return await clientPg.query(`
    SELECT 
    users.id, users.name, SUM("shortenUrls".views) as "visitCount",
    
    json_build_object
    (
    'id', "shortenUrls2".id,
    'url', "shortenUrls2".url,
    'views', "shortenUrls2".views
    ) AS "shortenedUrls"
    
    FROM users
    
    JOIN "shortenUrls"
    ON "shortenUrls"."fromUserId" = users.id
    
    JOIN "shortenUrls" as "shortenUrls2"
    ON "shortenUrls2"."fromUserId" = users.id
    
    WHERE users.id = $1
    
    GROUP BY users.id, "shortenUrls2".id, "shortenUrls2".views
    `, [idUser]);
}




export const userRepo = {
    insertNewUser,
    getUserData
} 