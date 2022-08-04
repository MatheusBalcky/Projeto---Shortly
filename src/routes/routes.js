import { Router } from 'express' ;
import { clientPg } from '../db/postgres.js';
import { signUpController, signInController } from '../controllers/loginAndRegisterControll.js';
import { signUpMiddle, signInMiddle } from '../middlewares/loginAndRegisterMWs.js';
import { urlShortenControll, getUrlById, openShortUrl, deleteShortUrl } from '../controllers/urlsControll.js';
import { urlShortenMW, deleteShortUrlMW } from '../middlewares/urlMWs.js';
import { verifyTokenMW } from '../middlewares/verifyTokenMW.js';
import { userMeControll } from '../controllers/userControll.js';

const route = Router();

route.post('/signup', signUpMiddle, signUpController);
route.post('/signin', signInMiddle, signInController);

route.post('/urls/shorten', verifyTokenMW, urlShortenMW, urlShortenControll);
route.get('/urls/:id', getUrlById);
route.get('/urls/open/:shortUrl', openShortUrl);
route.delete('/urls/:id', verifyTokenMW, deleteShortUrlMW, deleteShortUrl);

route.get('/users/me', verifyTokenMW, userMeControll);

route.get('/ranking');




route.get('/test', async (req, res) => {
    try {
        const { rows: test } = await clientPg.query(`SELECT * FROM test`);
        res.status(200).send(test);
    } catch (error) {
        console.log(error)
        res.sendStatus(500);
    }
})

export default route;