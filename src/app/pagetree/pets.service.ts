import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { PetModel } from './PetsModel';

@Injectable({
  providedIn: 'root'
})
export class PetsService {

  constructor(
    private http: HttpClient,
  ) {
    this.http = http;
  }

  async ListarPets(){
    const result = await this.http.get<PetModel[]>('https://petstore.swagger.io/v2/pet/findByStatus?status=available').toPromise();
    return result;
  }
}