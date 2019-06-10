import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ContactusComponent} from './components/contactus/contactus.component';
import {AboutusComponent} from './components/aboutus/aboutus.component';
import {ErrorComponent} from './components/error/error.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact-us', component: ContactusComponent },
  { path: 'about-us', component: AboutusComponent },
  { path: 'not-found', component: ErrorComponent },
  { path: '**', redirectTo: 'not-found' }
  ];
