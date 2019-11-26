import { Component } from '@angular/core';
import { HomeService } from '../service/home.service';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
   
  slideOptsOne = {
 initialSlide: 0,
 slidesPerView: 1,
 autoplay:true
};

  constructor(private top:HomeService) {}



  /*toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }*/

  siguiente( event ){
    this.top.getTop().then( ()=>{
      event.target.complete()
    }  );
  }
}
