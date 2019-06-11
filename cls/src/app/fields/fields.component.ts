import { Component, OnInit } from '@angular/core';
import {FieldsService} from '../services/fields.service';
import {FieldModel} from '../components/_models/field.model';

@Component({
  selector: 'app-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.css']
})
export class FieldsComponent implements OnInit {

  fields: FieldModel[];
  constructor(private fieldsService: FieldsService) { }

  ngOnInit() {
    this.fieldsService.getFields()
      .then(fields => {
        this.fields = fields;
      });

  }

}
