import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
//import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { URL_SERVICES } from '../../config/url.services';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  pagina: number = 1;
  resultado: any[] = [];
  voces: any[] = [];

  constructor( public http:Http ) { }

  getCharacter( id: string ){
    this.resultado = [];
    let url = URL_SERVICES + '/anime/' + id +'/characters_staff';
    
    this.http.get(url).pipe(map(res => res.json())).subscribe( data => {
      this.resultado.push( ...data.characters );
    });
  }
}
