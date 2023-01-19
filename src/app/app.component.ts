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
  genderM = "Masculino";
  genderF = "Feminino";

  suggestUserName() {
    const suggestedName = 'Superuser';

    /**
     * Essa não é a melhor abordagem porque é necessário sobrepor todos 
     * os valores dos inputs/controles do formulário após e execução do método 
     * suggestUserName(). Em outras palavras, o pathValue pode ser usado para sobrepor 
     * valores de inputs/controles do formulário em geral.
     */
    this.refLocalForm.setValue({
      userData: {
        username: suggestedName,
        email: 'superuser@gmail.com'
      },
      userQuestion: {
        questionAnswer: 'Bily billy'
      }
    })

    /**
     * Com essa abordagem, é possível alterar o valor apenas do
     * input/controle necessário dentro do formulário. Em outras palavras,
     * o pathValue pode ser usado para sobrepor o valor de partes do formulário.
     *
     *
     */
    this.refLocalForm.form.patchValue({userData: {
      username: suggestedName
    }})
  }

  // onSubmit(ref: NgForm) {
  //   console.log(ref)
  // }

  onSubmit() {
    return console.log(this.refLocalForm)
  }
}
