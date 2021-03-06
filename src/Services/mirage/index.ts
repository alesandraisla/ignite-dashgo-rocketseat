import { createServer, Factory, Model } from 'miragejs'
import faker from 'faker'

type User = {
    name: string;
    email: string;
    created_at: string;
}

export function makeServer() {
    const server = createServer({
        models: {
            user: Model.extend<Partial<User>>({})
        },
        //formas de gerar dados em massa
        factories: {
            user: Factory.extend({
                name(i: number) {
                    return `User ${i + 1}`
                },
                email() {
                    return faker.internet.email().toLowerCase();
                },
                createdAt() {
                    return faker.date.recent(10, new Date());
                },
            })
        },
        //Criar usuarios ficticio
        seeds(server) {
            server.createList('user', 200);
        },
        routes(){
            this.namespace = 'api';
            //delay
            this.timing = 750;

            this.get('/users');
            this.post('/users');

            this.namespace = '';
            
            this.passthrough()
        }
    })

    return server;
}