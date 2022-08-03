import { clientPg } from "../db/postgres.js";
import { nanoid } from 'nanoid';

export async function urlShortenControll (req, res){
    const shortenUrl = nanoid();

    const bodyRes = {
        shortUrl: shortenUrl
    }

    res.status(201).send(bodyRes);
}