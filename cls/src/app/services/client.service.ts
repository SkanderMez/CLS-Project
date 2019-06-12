import { Injectable } from '@angular/core';
// @ts-ignore
import file from '../../assets/json/clients.json' ;
import {ClientModel} from '../components/_models/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor() { }

  getClients(): Promise<ClientModel[]> {
    return new Promise<ClientModel[]>(resolve => {
      resolve (file.clients);
    });
  }
}
