import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {


  challengeForm: FormGroup;

  constructor() { }

  ngOnInit(): void {

    this.challengeForm = new FormGroup({
      'name': new FormControl(null, Validators.required, null),
      'email': new FormControl(null, [Validators.email, Validators.required], null),
    })
  }

}
