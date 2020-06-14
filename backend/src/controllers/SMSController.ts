import { Request, Response } from 'express'
const Nexmo = require('nexmo');

export default class SMSController {
    async create(req: Request, res: Response) {
        const { body: { phone } } = req

        console.log(phone)

        const nexmo = new Nexmo({
            apiKey: '220bce16',
            apiSecret: 'VG5oIuUtNmY2yULw',
        });

        const accessToken = Math.ceil(Math.random()*10000)
        
        const from = 'Ana Maria';
        const to = `55${phone}`;
        const text = `Seu Token de acesso: ${accessToken} ----`;
        
        nexmo.message.sendSms(from, to, text);

        res.status(200).send({ token: accessToken })

    }
}
