import { clientPg } from "../db/postgres.js";
import { queryToGetRanking } from "../db/querys.js";

export async function rankingControll (req, res){
    try {

        const { rows: rankingReuslt } = await clientPg.query(queryToGetRanking);
        //console.log(rankingReuslt.length)
        res.status(200).send(rankingReuslt);

    } catch (error) {
        
        console.log(error);
        res.sendStatus(500);

    }
}