import { Injectable } from '@angular/core';
import {FieldModel} from '../components/_models/field.model';

// @ts-ignore
import file from '../../assets/json/fields.json' ;

@Injectable({
  providedIn: 'root'
})
export class FieldsService {


  constructor() { }

  getFields(): Promise<FieldModel[]> {
    return  new Promise<FieldModel[]>(resolve => {
      resolve(file.fields);
    });
}
}
