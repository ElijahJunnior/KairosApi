import { Router, Request, Response } from 'express';


export const router = Router();

type Message = {
    texto: string;
}

function CriaMensagm(request: Request, response: Response) {

    const msg = <Message>{
        texto: "Teste de mensagem"
    }

    return response.json(msg);

}

router.get('/teste', CriaMensagm);