import { clientPg } from "../db/postgres.js";
import { registerSchema } from "../schemas/loginAndRegisterSchemas.js";

export async function signUpMiddle (req, res, next){
    const userToRegister = req.body;

    const { error } = registerSchema.validate(userToRegister);
    if(error){
        return res.status(422).send(error.details[0].message);
    }

    try {

        const { rows: verifyEmail } = await clientPg.query(`
        SELECT * FROM users WHERE email = $1`,[userToRegister.email.toLowerCase()]);

        if(verifyEmail.length > 0){
            return res.status(409).send('Email já existe!');
        }

        next();
    } catch (error){
        console.log(error);
        res.sendStatus(500);
    }
}