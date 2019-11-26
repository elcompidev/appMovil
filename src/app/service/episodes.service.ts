import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
//import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { URL_SERVICES } from '../../config/url.services';

@Injectable({
  providedIn: 'root'
})
export class EpisodesService {
  
  resultado: any[] = [];
  videos: any[] = [];

  constructor( public http:Http ) { }

  getEpisodes( id:string ){
    this.resultado = [];
    this.videos = [];
    let url = URL_SERVICES + '/anime/' + id + '/videos';
      console.log( url );
		    this.http.get(url).pipe(map(res => res.json())).subscribe( data => {
		      this.resultado.push( ...data.episodes );
          this.videos.push( ...data.promo );
		    });
  }
}
