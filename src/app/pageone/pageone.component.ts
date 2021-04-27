import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pageone',
  templateUrl: './pageone.component.html',
  styleUrls: ['./pageone.component.scss']
})

export class PageoneComponent {

  flag: number = 0;

  adicionar()
  {
    this.flag ++;
  }

  remover(quantidade=1)
  {
    this.flag = this.flag - quantidade;
  }
  }
