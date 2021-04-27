import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserService } from './user.service';
import { HttpClientModule} from '@angular/common/http'
import {MatFormFieldModule} from '@angular/material/form-field';




@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    UserRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],providers:[UserService]
})
export class UserModule { }
