import { urlShortenSchema } from '../schemas/urlSchemas.js';
import { verifyToken } from '../services/jwt.js';

export async function urlShortenMW (req, res, next){
    const token = req.headers.authorization;
    if(!token){
        return res.sendStatus(401);
    }
    
    const verifyTokenResult = verifyToken(token.replace('Bearer ', ''));
    if(!verifyTokenResult){
        return res.sendStatus(401);
    }

    const url = req.body;
    const { error } = urlShortenSchema.validate(url);
    if(error){
        return res.status(422).send('Invalid url!');
    }

    res.locals.verifyTokenResult = verifyTokenResult

    next();
}