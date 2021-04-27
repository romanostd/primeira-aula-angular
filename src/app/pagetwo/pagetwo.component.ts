import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagetwo',
  templateUrl: './pagetwo.component.html',
  styleUrls: ['./pagetwo.component.scss']
})
export class PagetwoComponent implements OnInit {

  lista: any[] = [];

  adicionarHero(nome: string, descricao: string){
    this.lista.push({name: nome, descricao: descricao})
  }

  constructor() { }

  ngOnInit(): void {
  }

}
