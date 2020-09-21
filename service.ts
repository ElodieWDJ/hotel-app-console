import {promises} from 'fs';
import request, { RequestPromiseAPI } from 'request-promise-native';
import { Client } from './domains';

interface ClientBack {
    uuid: string;
    nom: string;
    prenoms: string;
}

//var backendUrl="https://hotel-web-appi.herokuapp.com/";
class Service {
    request: RequestPromiseAPI;

    constructor() {
        this.request = request;
    }
    listerClients(): Promise<Client[]>{
        return this.request.get('https://hotel-web-appi.herokuapp.com/clients', { json: true })
        .then((result: ClientBack[]) => result.map(clientBack => new Client(clientBack.uuid, clientBack.nom, clientBack.prenoms)));
}
findByName(nomAChercher: string): Promise<Client[]> {
    return this.request.get(`https://hotel-web-appi.herokuapp.com/clients/nom=${nomAChercher}`, { json: true })
        .then((result: ClientBack[]) => result.map(clientBack => new Client(clientBack.uuid, clientBack.nom, clientBack.prenoms)));
}


posterClient(saisieNom: string, saisiePrenom: string): Promise<void> {
    return this.request.post({
        url: 'https://hotel-web-appi.herokuapp.com/clients',
        method: 'POST',
        json: {
            nom: saisieNom,
            prenoms: saisiePrenom
        }
    });
}

}

export { Service };