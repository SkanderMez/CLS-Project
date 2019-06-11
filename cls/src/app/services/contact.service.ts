import { Injectable } from '@angular/core';
import {ContactModel} from '../components/_models/contact.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contact: ContactModel = {
    email: 'abc@gmail.com',
    phone: '1234567890',
    address1: 'address1',
    address2: 'address2'
  };

  constructor() { }

  getContact(): Promise<ContactModel> {
    return new Promise<ContactModel>(resolve => {
      resolve (this.contact);
    });
  }
}
