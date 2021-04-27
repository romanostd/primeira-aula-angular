import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  user?: User;
  form: FormGroup = this.formBuilder.group({
    userName: ['', [Validators.required]],
    password: ['', [Validators.required]],
  })
  constructor(  private formBuilder: FormBuilder, 
                private NomeServico: UserService) { }

  ngOnInit(): void {
  }

  async login(){
    if (this.form.invalid) return;
    const userName = this.form.controls.userName.value;
    const password =  this.form.controls.password.value;

    await this.NomeServico.login(userName, password);

    console.log(this.NomeServico.usuarioAcesso);
    this.user = this.NomeServico.usuarioAcesso;
  }

}