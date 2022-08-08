import { clientPg } from "../db/postgres.js";



export async function insertNewShortenUrl (url, idUser, shortUrl){
    return await clientPg.query(`
    INSERT INTO "shortenUrls" (url, "fromUserId", "shortUrl")
    VALUES ($1, $2, $3)
    `,[url, idUser, shortUrl]);
}


export async function getUrlById (id){
    return await clientPg.query(`
    SELECT id, url, "shortUrl" FROM "shortenUrls"
    WHERE id = $1
    `, [id]);
}


export async function findUrl (shortUrl) {
    return await clientPg.query(`
    SELECT * FROM "shortenUrls"
    WHERE "shortUrl" = $1
    `, [shortUrl]);
}


export async function plusOneView (idUrl){
    return await clientPg.query(`
    UPDATE "shortenUrls"
    SET views = views + 1
    WHERE id = $1
    `, [idUrl]);
}


export async function deleteUrl (idUrl){
    return await clientPg.query(`DELETE FROM "shortenUrls" WHERE id = $1`, [idUrl]);   
}





export const urlsRepo = {
    insertNewShortenUrl,
    getUrlById,
    findUrl,
    plusOneView,
    deleteUrl
}