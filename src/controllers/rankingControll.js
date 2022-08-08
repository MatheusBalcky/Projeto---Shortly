import { rankingRepo } from "../repositories/rankingRepo.js";

export async function rankingControll (req, res){
    try {

        const { rows: rankingReuslt } = await rankingRepo.getRanking();
        //console.log(rankingReuslt.length)
        res.status(200).send(rankingReuslt);

    } catch (error) {
        
        console.log(error);
        res.sendStatus(500);

    }
}