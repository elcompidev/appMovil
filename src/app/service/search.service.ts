import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
//import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { URL_SERVICES } from '../../config/url.services';


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  pagina: number = 1;
  resultado: any[] = [];
  query: string = "Goku";

  constructor( public http:Http ) { this.getSearch( ) }

  getSearch( ){
    this.resultado = [];
    console.log( "Buscar por", this.query );
    let promesa = new Promise( (resolve, project) => {
    	let url = URL_SERVICES + '/search/anime?q=' + this.query + '&page=' + this.pagina;
		    console.log( "Buscar url ", url );
		    this.http.get(url).pipe(map(res => res.json())).subscribe( data => {
		      this.resultado.push( ...data.results );
		      this.pagina ++;
		          resolve();
		    });
    });

    return promesa;
  }

  get(){
    let url = URL_SERVICES + '/search/anime?q=' + this.query + '&page=' + this.pagina;
		    console.log( "Buscar url ", url );
		    this.http.get(url).pipe(map(res => res.json())).subscribe( data => {
		      this.resultado.push( ...data.results );
		      this.pagina ++;
		    });
  }
}
