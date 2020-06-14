import { Request, Response } from 'express'
import connection from '../connection'

export default class SOSNumbersController {
    async show(req: Request, res: Response) {

        const { estado } = req.params

        connection.query(`SELECT cc.* FROM cd_concessionarias cc INNER JOIN cd_concessionarias_estados ce ON ce.fk_concessionaria = cc.id INNER JOIN cd_estados es ON ce.fk_estado = es.id WHERE es.nom_estado LIKE '${estado.toUpperCase()}'`, (err: any, result: any) => {
            if (err) {
                console.log(err);
                res.status(400).send(err);
            }
            res.status(200).send(result.rows);
        });
    }
}