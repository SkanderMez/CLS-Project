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
import {AboutUsService} from './services/about-us.service';
import {FieldsService} from './services/fields.service';
import { EmailFormComponent } from './components/email-form/email-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    NavbarComponent,
    ContactusComponent,
    AboutusComponent,
    ErrorComponent,
    FieldsComponent,
    EmailFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [NavbarService, FooterService, AboutUsService , FieldsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
