import { Injectable } from '@angular/core';
import { userModels } from './userModels';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class UserService {

  constructor(private http:HttpClient) {
    
}

async createUser (user : userModels) {
  return await this.http.post<any>('https://petstore.swagger.io/v2/user', user).toPromise();
  
}

}
