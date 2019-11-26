import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../service/character.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character',
  templateUrl: './character.page.html',
  styleUrls: ['./character.page.scss'],
})
export class CharacterPage implements OnInit {

  constructor(private route: ActivatedRoute,private character:CharacterService) {
    this.character.getCharacter( this.route.snapshot.paramMap.get('id') );
  }

  ngOnInit() {
  }

}
