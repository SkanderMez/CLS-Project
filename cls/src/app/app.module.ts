import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ErrorComponent } from './components/error/error.component';
import { NavbarService } from './services/navbar.service';
import { FooterService } from './services/footer.service';
import {routes} from './app-routing.module';
import { FieldsComponent } from './fields/fields.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    NavbarComponent,
    ContactusComponent,
    AboutusComponent,
    ErrorComponent,
    FieldsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [NavbarService, FooterService    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
