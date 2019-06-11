import { Injectable } from '@angular/core';
import {AboutusModel} from '../components/_models/aboutus.model';

import  file from '../../assets/about_us.json' ;

@Injectable({
  providedIn: 'root'
})
export class AboutUsService {


  constructor() {
  }

   getAboutus() : Promise<AboutusModel> {
     return new Promise<AboutusModel>(resolve => {
       resolve (file);
     });
   }

}
