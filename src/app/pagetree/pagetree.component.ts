import { Component, OnInit } from '@angular/core';
import { PetsService } from './pets.service';
import { PetModel } from './PetsModel';

@Component({
  selector: 'app-pagetree',
  templateUrl: './pagetree.component.html',
  styleUrls: ['./pagetree.component.scss']
})
export class PagetreeComponent implements OnInit {
  lista?: PetModel[];
  constructor(private PetStore: PetsService) { }

  async ngOnInit(){
    this.lista= await this.PetStore.ListarPets()
  }

}