import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild("refLocalForm") refLocalForm: NgForm;

  defaultQuestion = 'pet';
  answer = "";

  suggestUserName() {
    const suggestedName = 'Superuser';

    this.refLocalForm.setValue({
      userData: {
        username: suggestedName,
        email: ''
      },
      userQuestion: {
        questionAnswer: ''
      }
    })
  }

  // onSubmit(ref: NgForm) {
  //   console.log(ref)
  // }

  onSubmit() {
    return console.log(this.refLocalForm)
  }
}
