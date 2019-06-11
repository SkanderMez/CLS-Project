import { Injectable } from '@angular/core';
import {ContactModel} from '../components/_models/contact.model';
// @ts-ignore
import file from '../../assets/json/contact.json' ;

@Injectable({
  providedIn: 'root'
})
export class ContactService {


  constructor() { }

  getContact(): Promise<ContactModel> {
    return new Promise<ContactModel>(resolve => {
      resolve (file.contact);
    });
  }
}
