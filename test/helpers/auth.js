import 'dotenv/config';
import request from 'supertest';
import app from '../../src/app.js';


let tokenEmCache = null;

export async function getTokenAdmin() {

    if (!tokenEmCache) {

        const responseToken = await request(app)
                .post('/api/auth/login')
                .set('Content-Type', 'application/json')
                .send({ email: 'admin@escola.com', senha: 'admin123' 
                });

        tokenEmCache = responseToken.body.token;
                
    }
   return `Bearer ${tokenEmCache}`;

}

export async function getToken(email, senha) {

    const responseToken = await request(app)
                .post('/api/auth/login')
                .set('Content-Type', 'application/json')
                .send({
                    email: email,
                    senha: senha
                });
                
    return `Bearer ${responseToken.body.token}`;

}
      