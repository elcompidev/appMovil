import { Component, OnInit } from '@angular/core';
import { SeasonService } from '../service/season.service';
import { IonInfiniteScroll } from '@ionic/angular';
import * as moment from 'moment';

@Component({
  selector: 'app-season',
  templateUrl: 'season.page.html',
  styleUrls: ['season.page.scss'],
})
export class SeasonPage{

  anios:string = "";
  tiempo:string = "";

  constructor(private temporadas:SeasonService) { 
    this.anios = moment().format("YYYY");  
    this.temporadas.getSeason();
  }

  /*toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }*/

  refrescar( event ){
    this.anios = moment(event.detail.value).format("YYYY");
    this.temporadas.anio = this.anios;
    this.temporadas.getSeason();
  }

  refrescarTiempo( event ){
    this.tiempo = event.detail.value;
    this.temporadas.tiempo = this.tiempo;
    return this.temporadas.getSeason();
  }
}
