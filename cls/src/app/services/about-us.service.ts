import { Injectable } from '@angular/core';
// @ts-ignore
// tslint:disable-next-line:import-spacing
import  file from '../../assets/about_us.json' ;

@Injectable({
  providedIn: 'root'
})
export class AboutUsService {
  team: any ;
  constructor() {
        console.log(file.team);
        this.team = file.team ;
  }

    getTeam(): any {
        return this.team ;
    }
}
