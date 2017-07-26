import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Heroe, HeroesService} from '../../services/hereos.service';
@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
//  styles: []
})
export class HeroeComponent{
    heroe:Heroe = null;
  constructor(private activatedRoute:ActivatedRoute,
  private heroeservice:HeroesService) {
      this.activatedRoute.params.subscribe(params => {
          let id:number = params['id'];
          this.heroe = this.heroeservice.getHeroe(id);
          console.log(this.heroe);
      });
  }


}
