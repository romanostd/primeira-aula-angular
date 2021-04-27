import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { User } from './user.model';

export interface Retorno {
  code: number,
  type: string,
  message: string
}

@Injectable()
export class UserService {
  sessao?: string;
  usuarioAcesso?: User;
  constructor(
    private http: HttpClient,
  ) { }

  async createUser(user: User){
    return await this.http.post<Retorno>('https://petstore.swagger.io/v2/user', user).toPromise();
  }

  async login(userName: string, password: string){
    const login = await this.http.get<Retorno>(`https://petstore.swagger.io/v2/user/login?username=${userName}&password=${password}`).toPromise();
  
    if (login.code === 200) {
      const codigo_sessao = login.message.split(':')[1];
      await this.getUser(userName);

      this.sessao =  codigo_sessao;
    } else {
      throw new Error("Acesso negado")
    }
  }

  async getUser(userName: string){
    const user: User = await this.http.get<User>(`https://petstore.swagger.io/v2/user/${userName}`).toPromise();

    this.usuarioAcesso = user;
  }
}