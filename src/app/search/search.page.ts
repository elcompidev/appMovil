import { Component, OnInit } from '@angular/core';
import { SearchService } from '../service/search.service';
import { IonInfiniteScroll } from '@ionic/angular';


@Component({
  selector: 'app-search',
  templateUrl: 'search.page.html',
  styleUrls: ['search.page.scss'],
})
export class SearchPage {

  query: string = "";

  constructor(private buscar:SearchService) { }

  /*toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }*/

  siguiente( event ){
    this.buscar.query = this.query;
    this.buscar.getSearch().then( ()=>{
      event.target.complete()
    });
  }

  getBuscar( event ){
    this.query = event.detail.value;
    this.buscar.pagina = 1;
    this.buscar.query = event.detail.value;
    this.buscar.getSearch();
  }

}
