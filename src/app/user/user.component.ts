import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { userModels } from './userModels';
import { UserService } from './user.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent  {

  usuario:userModels; 
  form: FormGroup = this.formBuilder.group({
    user: ['',[Validators.required]],
    firstName: ['',[]],
    lastName:  ['',[]],
    email:  ['',[Validators.required,Validators.email]],
    password: ['',[]],
    phone:  ['',[]],
    userStatus: ['',[]]
  });

  constructor (private formBuilder:FormBuilder , private service: UserService){
    this.usuario = new userModels;
    

  }

  async registrar() {
    this.usuario = new userModels()
    this.usuario.username = this.form.controls.user.value;
    this.usuario.firstName = this.form.controls.user.value;
    this.usuario.lastName = this.form.controls.user.value;
    this.usuario.email = this.form.controls.user.value;
    this.usuario.password = this.form.controls.user.value;
    this.usuario.phone = this.form.controls.user.value;

    const ret = await this.service.createUser(this.usuario)
    console.log(ret)

  }
}
