import { Router } from 'express' ;
import { clientPg } from '../db/postgres.js';

import { signUpController } from '../controllers/loginAndRegisterControll.js';
import { signUpMiddle } from '../middlewares/loginAndRegisterMWs.js';

const route = Router();

route.post('/signup', signUpMiddle, signUpController);
route.post('/signin');

route.post('/urls/shorten');
route.get('/urls/:id');
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