import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from './user.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  usuario?: User;
  form: FormGroup = this.formBuilder.group({
    userName: ['', [Validators.required]],
    firstName: ['', []],
    lastName: ['', []],
    email: ['', [Validators.required, Validators.email]],
    password: ['', []],
    phone: ['', [Validators.required, Validators.pattern("[0-9 ]{12}")]],
    userStatus: ['', []],
  })

  constructor(  private formBuilder: FormBuilder, 
                private NomeServico: UserService) {}

  ngOnInit() {
    console.log(this.NomeServico);
  }

  async registrar() {

    if(this.form.invalid) return; 

    this.usuario = {}
    this.usuario.userName = this.form.controls.userName.value
    this.usuario.firstName = this.form.controls.firstName.value
    this.usuario.lastName = this.form.controls.lastName.value
    this.usuario.email = this.form.controls.email.value
    this.usuario.password = this.form.controls.password.value
    this.usuario.phone = this.form.controls.phone.value
    this.usuario.userStatus = this.form.controls.userStatus.value

    const ret = await this.NomeServico.createUser(this.usuario)
    console.log(ret)
  }
}