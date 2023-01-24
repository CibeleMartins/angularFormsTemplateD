import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forms-reactive',
  templateUrl: './forms-reactive.component.html',
  styleUrls: ['./forms-reactive.component.css']
})
export class FormsReactiveComponent implements OnInit {

  forms: FormGroup;
  genders = ['male', 'female'];

  ngOnInit() {

    this.forms = new FormGroup({
      'email': new FormControl,
      'password': new FormControl,
      'gender': new FormControl

    })
  }
}
