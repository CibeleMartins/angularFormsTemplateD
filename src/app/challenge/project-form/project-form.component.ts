import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

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
      'name': new FormControl(null, [Validators.required, this.validatorName], null),
      'email': new FormControl(null, [Validators.email, Validators.required], this.asyncValidatorName),
    })
  }

  submit() {

  }


  validatorName(control: FormControl): {[s: string] : boolean} {

    if(control.value === "Test") {
      return {'nameIsNotPermited': true}
    }
    return null;
  }

  asyncValidatorName(control:  FormControl): Promise<any> | Observable<any> {

    const promise = new Promise((resolve, reject)=> {

      if(control.value === "Test") {
        resolve({'nameIsNotPermited': true})
      } else {
        resolve(null)
      }
    })

    return promise;
  }

}
