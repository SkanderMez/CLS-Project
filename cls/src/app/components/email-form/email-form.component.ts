import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css']
})
export class EmailFormComponent implements OnInit {

  emailForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private hhtp: HttpClient) { }

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
    this.hhtp.post('https://script.google.com/macros/s/AKfycbzz6JjJGIPsk8wdFP1naujz8714pj0NRNdWx63a8GmsScL8ex11/exec', this.emailForm.value)
      .subscribe(d => console.log(d));
  }

}
