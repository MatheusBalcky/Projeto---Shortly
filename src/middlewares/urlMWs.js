import { urlShortenSchema } from '../schemas/urlSchemas.js';
import { verifyToken } from '../services/jwt.js';

export async function urlShortenMW (req, res, next){
    const url = req.body;
    
    const token = req.headers.authorization;

    if( !token || !verifyToken(token.replace('Bearer ', '')) ){
        return res.sendStatus(401);
    }

    const { error } = urlShortenSchema.validate(url);
    if(error){
        return res.status(422).send('Invalid url!');
    }

    next();
}