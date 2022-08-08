import { clientPg } from "../db/postgres.js";

export default async function getRanking(){
    return await clientPg.query(`
    SELECT users.id, name, COUNT("shortenUrls"."fromUserId") as "linksCount", SUM("shortenUrls".views) as "visitCount"
    FROM users
    
    JOIN "shortenUrls"
    ON "shortenUrls"."fromUserId" = users.id
    
    GROUP BY users.id
    ORDER BY "visitCount" DESC
    LIMIT 10`);
}



export const rankingRepo = {
    getRanking
}