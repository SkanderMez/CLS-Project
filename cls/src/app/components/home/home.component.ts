import { Component, OnInit } from '@angular/core';
import {ContactModel} from '../_models/contact.model';
import {ContactService} from '../../services/contact.service';
import {AboutUsService} from '../../services/about-us.service';
import {ClientService} from '../../services/client.service';
import {ClientModel} from '../_models/client.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  contact: ContactModel;
  aboutUs: any;
  clients: ClientModel[];
  constructor(private contactService: ContactService,
              private clientService: ClientService,
              private aboutUsService: AboutUsService) { }

  ngOnInit() {
    this.contactService.getContact()
      .then(contact => {
        this.contact = contact;
      });
    this.aboutUsService.getAboutus()
      .then(aboutUs => {
        this.aboutUs = aboutUs;
      });
    this.clientService.getClients()
      .then(clients => {
        this.clients = clients;
      });
  }

}
