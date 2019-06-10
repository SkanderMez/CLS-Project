import { NavbarService } from '../../services/navbar.service';
import { FooterService } from '../../services/footer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  constructor(public nav: NavbarService,public footer: FooterService) { }

  ngOnInit() {
    this.nav.hide();
    this.footer.hide();
  }

}
