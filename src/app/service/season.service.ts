import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
//import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { URL_SERVICES } from '../../config/url.services';

@Injectable({
  providedIn: 'root'
})
export class SeasonService {

  pagina: number = 1;
  resultado: any[] = [];
  anio:string = "2019";
  tiempo:string = "summer";

  constructor( public http:Http ) { }

  getSeason( ){
    this.resultado = [];
    let promesa = new Promise( (resolve, project) => {
    	let url = URL_SERVICES + '/season/' + this.anio + '/' + this.tiempo;
      console.log( url );
		    this.http.get(url).pipe(map(res => res.json())).subscribe( data => {
		      this.resultado.push( ...data.anime );
		      this.pagina ++;
		          resolve();
		    });
    });

    return promesa;
  }
}
