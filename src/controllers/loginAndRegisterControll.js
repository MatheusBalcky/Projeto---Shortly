import bcrypt from 'bcrypt';
import { clientPg } from "../db/postgres.js";


export async function signUpController (req,res){
    const userToRegister = req.body;

    try {

        const passwordCrypted = bcrypt.hashSync(userToRegister.password, 10);

        await clientPg.query(`
            INSERT INTO users (name, email, password)
            VALUES ($1, $2, $3)
        `, [userToRegister.name, userToRegister.email.toLowerCase(), passwordCrypted]);

        res.sendStatus(201);

    } catch (error) {

        console.log(error);
        res.sendStatus(500);
        
    }
}