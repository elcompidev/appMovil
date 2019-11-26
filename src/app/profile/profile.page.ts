import { Component } from '@angular/core';
import { ProfileService } from '../service/profile.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss'],
})
export class ProfilePage {

  constructor(private route: ActivatedRoute,private profile:ProfileService) {
    this.profile.getProfile( this.route.snapshot.paramMap.get('id') );
  }
}

