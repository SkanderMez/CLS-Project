import { FooterService } from '../../services/footer.service';
import { Component, OnInit } from '@angular/core';
import {ContactService} from '../../services/contact.service';
import {ContactModel} from '../_models/contact.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  contact: ContactModel;
  constructor(public footer: FooterService, private contactService: ContactService) { }

  ngOnInit() {
    this.contactService.getContact()
      .then(contact => {
        this.contact = contact;
      });
  }

}
