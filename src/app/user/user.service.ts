import { Injectable } from '@angular/core';
import { userModels } from './userModels';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class UserService {

  acesso? : string;
  usuarioAcesso? : any;


  constructor(private http:HttpClient) {
    
}

async createUser (user : userModels) {
  return await this.http.post<any>('https://petstore.swagger.io/v2/user', user).toPromise();
  
}

async login (username : string , password : string ){
  const login = await this.http.get<any>(`https://petstore.swagger.io/v2/user/login?username=${username}&password=${password}`).toPromise();
  if (login.code === 200) {
    const codigo_sessao = login.message.split('.')[1];
    await this.getUser(username):
    ///this.sessao = codigo_sessao;
  } else {
    throw new Error ("acesso negado");
  }
}

async getUser (username : string) {
  const user: any =await this.http.get<any>(`https://petstore.swagger.io/v2/user/${username}`).toPromise();
  this.usuarioAcesso = user;
}

}
