import 'dotenv/config';
import request from 'supertest';
import { api } from './api.js';


let tokenEmCache = null;

export async function getTokenAdmin() {

    if (!tokenEmCache) {

        const responseToken = await api()
                .post('/api/auth/login')
                .set('Content-Type', 'application/json')
                .send({ email: 'admin@escola.com', senha: 'admin123' 
                });

        tokenEmCache = responseToken.body.token;
                
    }
   return `Bearer ${tokenEmCache}`;

}

export async function getToken(email, senha) {

    const responseToken = await api()
                .post('/api/auth/login')
                .set('Content-Type', 'application/json')
                .send({
                    email: email,
                    senha: senha
                });
                
    return `Bearer ${responseToken.body.token}`;

}
      