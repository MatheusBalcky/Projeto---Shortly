import { Router } from 'express' ;
import { clientPg } from '../db/postgres.js';
import { signUpController, signInController } from '../controllers/loginAndRegisterControll.js';
import { signUpMiddle, signInMiddle } from '../middlewares/loginAndRegisterMWs.js';
import { urlShortenControll, getUrlById } from '../controllers/urlsControll.js';
import { urlShortenMW } from '../middlewares/urlMWs.js';


const route = Router();

route.post('/signup', signUpMiddle, signUpController);
route.post('/signin', signInMiddle, signInController);

route.post('/urls/shorten', urlShortenMW, urlShortenControll);
route.get('/urls/:id', getUrlById);
route.get('/urls/open/:shortUrl');
route.delete('/urls/:id');

route.get('/users/me');

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