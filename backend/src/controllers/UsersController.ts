import { Request, Response } from 'express'
import connection from '../connection'

export default class UsersController {
    async index(req: Request, res: Response) {
        connection.query('SELECT * FROM cd_usuarios', (err: any, result: any) => {
            if (err) {
                console.log(err);
                res.status(400).send(err);
            }
            res.status(200).send(result.rows);
        });
    }

    async show(req: Request, res: Response) {
        const { params: { email } } = req
        connection.query(`SELECT * FROM cd_usuarios WHERE email = '${email}'`, (err: any, result: any) => {
            if (err) {
                res.status(400).send(err)
            }
            res.status(200).send(result.rows);
        })
    }

    async create(req: Request, res: Response) {
        const { login, senha, email, qtde_milhas, telefone } = req.body

        connection.query(`
            INSERT INTO cd_usuarios(login, senha, email, qtde_milhas, telefone) 
            VALUES('${login}', '${senha}', '${email}', ${qtde_milhas}, '${telefone}')`, 
            (err: any, result: any) => {
                if (err) {
                    res.status(400).send(err)
                }
                res.status(200).send(result);
            }
        )

    }
}