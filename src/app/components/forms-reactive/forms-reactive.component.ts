import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
      'username': new FormControl(null,Validators.required, null),
      'email': new FormControl(null, [Validators.required, Validators.email], null),
      'password': new FormControl(null, Validators.minLength(6), null),
      'gender': new FormControl(this.genders[0])
    })
  }
}
