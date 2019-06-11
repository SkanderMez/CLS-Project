import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from '@angular/forms';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css']
})
export class EmailFormComponent implements OnInit {

  emailForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.emailForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', Validators.required],


    });
  }

  submitMail() {
    console.log(this.emailForm.value);
  }

}
