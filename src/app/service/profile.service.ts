import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { URL_SERVICES } from '../../config/url.services';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  resultado: any[] = [];
  informacion = {};

  constructor( public http:Http ) { }

  getProfile( id: string ){
    this.resultado = [];
    let url = URL_SERVICES + '/anime/' + id;
    
    this.http.get(url).pipe(map(res => res.json())).subscribe( data => {
      this.informacion = {
        "imagen": data.image_url,
        "titulo": data.title,
        "sipnosis": data.synopsis,
        "id": data.mal_id
      };
      this.resultado.push( ...data.genres );
    });
  }
}
