import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpModule } from '@angular/http';
import { SearchService } from './service/search.service';
import { HomeService } from './service/home.service';
import { ProfileService } from './service/profile.service';
import { CharacterService } from './service/character.service';
import { SeasonService } from './service/season.service';
import { EpisodesService } from './service/episodes.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpModule ],
  providers: [
    StatusBar,
    SplashScreen, SearchService, HomeService, ProfileService, CharacterService,SeasonService,EpisodesService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
