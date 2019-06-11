import { Component, OnInit } from '@angular/core';
import {ContactService} from '../../services/contact.service';
import {ContactModel} from '../_models/contact.model';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  contact: ContactModel;

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contactService.getContact()
      .then(contact => {
        this.contact = contact;
      });
  }

}
