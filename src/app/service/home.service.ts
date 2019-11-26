import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
//import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { URL_SERVICES } from '../../config/url.services';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  pagina: number = 1;
  resultado: any[] = [];

  constructor( public http:Http ) { this.getTop() }

  getTop(){
    let promesa = new Promise( (resolve, project) => {
        let url = URL_SERVICES + '/top/anime/' + this.pagina;
    
        this.http.get(url).pipe(map(res => res.json())).subscribe( data => {
          this.resultado.push( ...data.top );
          this.pagina ++;
          resolve();
        });
    });

    return promesa;

    
  }
}
