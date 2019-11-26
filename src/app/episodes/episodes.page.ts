import { Component, OnInit } from '@angular/core';
import { EpisodesService } from '../service/episodes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-episodes',
  templateUrl: 'episodes.page.html',
  styleUrls: ['episodes.page.scss'],
})
export class EpisodesPage implements OnInit {

  constructor(private route: ActivatedRoute, private episodios:EpisodesService) { this.episodios.getEpisodes(this.route.snapshot.paramMap.get('id'))}

  ngOnInit() {
  }

}
