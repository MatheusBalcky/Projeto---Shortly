import { nanoid } from 'nanoid';
import  {urlsRepo}  from "../repositories/urlsRepo.js";

export async function urlShortenControll (req, res){
    const shortUrl = nanoid();
    const { idUser } = res.locals.verifyTokenResult;
    const { url } = req.body;

    try {
        
        await urlsRepo.insertNewShortenUrl(url, idUser, shortUrl);

        res.status(201).send( {shortUrl: shortUrl} );

    } catch (error) {

        console.log(error);
        res.sendStatus(500);

    }
}

export async function getUrlById (req, res){
    const id = parseInt(req.params.id);
    if(isNaN(id)){
        return res.sendStatus(422);
    }

    try {
        const { rows: findUrlById } = await urlsRepo.getUrlById(id);
        
        if(findUrlById.length < 1){
            res.sendStatus(404);
        }

        res.status(200).send(findUrlById[0]);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

export async function openShortUrl (req, res){
    const shortUrl =  req.params.shortUrl;
    
    try {

        const { rows: findShortUrl } = await urlsRepo.findUrl(shortUrl);

        if(findShortUrl.length < 1){
            return res.sendStatus(404)
        }
        
        await urlsRepo.plusOneView(findShortUrl[0].id);

        return res.redirect(findShortUrl[0].url);

    } catch (error) {

        console.log(error);
        return res.sendStatus(500);

    }
}

export async function deleteShortUrl (req, res){
    const idToDelete = parseInt(req.params.id);

    try {
        
        await urlsRepo.deleteUrl(idToDelete);

        res.sendStatus(204);

    } catch (error) {

        console.log(error);
        res.sendStatus(500);

    }
}