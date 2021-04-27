import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  usuario : userModels; 
  form : FormGroup = this.formBuilder.group({
    user: ['',[Validators.required]],
    firstName: ['',[]],
  });

    constructor (private formBuilder:FormBuilder , private service: UserService,){
    }

  async login(){
    if (this.form.invalid) return;
      const username = this.form.controls.username.value;
      const password = this.form.controls.password.value;

      await this.service.login(username, password);

      console.log(this.service.usuarioAcesso);
      this.usuario = this.service.usuarioAcesso;
  }
 

}        

