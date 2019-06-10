import { NavbarService } from '../../services/navbar.service';
import { FooterService } from '../../services/footer.service';
import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit,OnDestroy {

  constructor(public nav: NavbarService,public footer: FooterService) { }

  ngOnInit() {
    this.nav.hide();
    this.footer.hide();
  }

  ngOnDestroy() {
    this.nav.show();
    this.footer.show();
  }

}
