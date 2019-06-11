import { Component, OnInit } from '@angular/core';
import {ContactModel} from '../_models/contact.model';
import {ContactService} from '../../services/contact.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  contact: ContactModel;
  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contactService.getContact()
      .then(contact => {
        this.contact = contact;
      });
  }

}
