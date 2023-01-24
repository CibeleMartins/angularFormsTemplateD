import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-forms-reactive',
  templateUrl: './forms-reactive.component.html',
  styleUrls: ['./forms-reactive.component.css']
})
export class FormsReactiveComponent implements OnInit {

  forms: FormGroup;
  genders = ['male', 'female'];
  biddenUsernames = ['Ana', 'Maria', 'Ricardo'];

  ngOnInit() {

    this.forms = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null,[Validators.required, this.forBiddenUsernames.bind(this)], null),
        'email': new FormControl(null, [Validators.required, Validators.email], this.forBiddenEmail),
        'password': new FormControl(null, Validators.minLength(6), null),
      }),
      'gender': new FormControl(this.genders[0]),
      'hobbies': new FormArray([])
    })
  }

  submitt() {
    console.log(this.forms)
  }

  onAddHobbie() {

    const control = new FormControl(null, Validators.required, null);

    (<FormArray> this.forms.get('hobbies')).push(control);
  }

  getControls() {
    return (<FormArray>this.forms.get('hobbies')).controls;
  }

  forBiddenUsernames(control: FormControl): {[s: string]: boolean} {

    if(this.biddenUsernames.indexOf(control.value) !== -1) {
      return {'usernameAlredyInUse': true}
    }

    return null;
  }

  forBiddenEmail(control: FormControl): Promise<any> | Observable<any> {

    const promise = new Promise((resolve, reject)=> {
      setTimeout(()=> {
        if(control.value === 'teste@gmail.com') {
          resolve({"emailAlredyInUse": true})
        } else {
          resolve(null)
        }
      }, 1500)
    })

    return promise;
  }
}
