import { Component, OnInit } from '@angular/core';
import {AboutUsService} from '../../services/about-us.service';
import {AboutusModel} from '../_models/aboutus.model';
import {FieldsService} from '../../services/fields.service';
import {FieldModel} from '../_models/field.model';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

/* team =
    [
      {
        "nom" : 'Ridha Gharbi',
        "Poste" : 'BOSS',
        "URL" : '4.jpg',
        "fb" : 'https://web.facebook.com/ridha.gharbi.353' ,
        "twitter" : '#',
        'linkedin' : '#'
      },
      {
        "nom" : 'Neyla Karoui',
        "Poste" : 'Consultant',
        "URL" : '9.jpg',
        "fb" : 'https://web.facebook.com/profile.php?id=100011098754342' ,
        "twitter" : '#',
        'linkedin' : 'https://tn.linkedin.com/in/maher-dous-943b0a48'
      },

      {
        "nom" : 'Hamza Daoues',
        "Poste" : 'developer',
        "URL" : '1.jpg',
        "fb" : 'https://web.facebook.com/hdaoues' ,
        "twitter" : '#',
        'linkedin' : '#'
      },
      {
        "nom" : 'Khalil Turki',
        "Poste" : 'developer',
        "URL" : '2.jpg',
        "fb" : '#' ,
        "twitter" : '#',
        'linkedin' : '#'

      },
      {
        "nom" : 'Skander Mez',
        "Poste" : 'developer',
        "URL" : '3.jpg',
        "fb" : '#' ,
        "twitter" : '#',
        'linkedin' : '#'
      },
      {
        "nom" : 'Omar Kammoun',
        "Poste" : 'developer',
        "URL" : '5.jpg',
        "fb" : 'https://web.facebook.com/Omar.Nz.Kamoun' ,
        "twitter" : '#',
        'linkedin' : '#'
      },
      {
        "nom" : 'Mazen Hamdi',
        "Poste" : 'developer',
        "URL" : '6.jpg',
        "fb" : 'https://web.facebook.com/profile.php?id=1672831203&ref=br_rs' ,
        "twitter" : '#',
        'linkedin' : '#'
      },
      {
        "nom" : 'Slim Sellami',
        "Poste" : 'IT manager and external communication',
        "URL" : '7.jpg',
        "fb" : 'https://web.facebook.com/slim.sellami.3' ,
        "twitter" : '#',
        'linkedin' : '#'
      },
      {
        "nom" : 'Maher Dous',
        "Poste" : 'Consultant',
        "URL" : '8.jpg',
        "fb" : 'https://web.facebook.com/dous.maher' ,
        "twitter" : '#',
        'linkedin' : 'https://tn.linkedin.com/in/maher-dous-943b0a48'
      }
    ];

*/

aboutus: AboutusModel ;
fields: FieldModel[];
  constructor(private aboutUsService: AboutUsService, private fieldsService: FieldsService) {
  }

  ngOnInit() {
    this.aboutUsService.getAboutus()
      .then(aboutus => {
        this.aboutus = aboutus;
      });

    this.fieldsService.getFields()
      .then(fields =>{
        this.fields=fields;
      });
  }

}
