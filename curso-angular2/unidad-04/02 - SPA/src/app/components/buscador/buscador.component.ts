import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/hereos.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})

export class BuscadorComponent implements OnInit {
    heroes:any[] = [];
    query:string;
  constructor(
      private activatedRoute:ActivatedRoute,
      private _heroeService:HeroesService
  ) {

  }

  ngOnInit() {
      this.activatedRoute.params.subscribe(params => {
          this.query =params['query'];
          this.heroes = this._heroeService.buscarHeroes(this.query);
          console.log(this.heroes);
      });

  }

}
