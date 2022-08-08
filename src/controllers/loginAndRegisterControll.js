import bcrypt from 'bcrypt';
import { createToken } from '../services/jwt.js';
import { userRepo } from '../repositories/userRepo.js'

export async function signUpController (req,res){
    const userToRegister = req.body;

    try {

        const passwordCrypted = bcrypt.hashSync(userToRegister.password, 10);

        await userRepo.insertNewUser(userToRegister.name, userToRegister.email.toLowerCase(), passwordCrypted);

        res.sendStatus(201);

    } catch (error) {

        console.log(error);
        res.sendStatus(500);
        
    }
}

export async function signInController (req,res){
    const { idUser } = res.locals;

    try {
        
        const token = createToken({ idUser: idUser});

        res.status(200).send(token);

    } catch (error) {

        console.log(error);
        res.sendStatus(500);

    }
}