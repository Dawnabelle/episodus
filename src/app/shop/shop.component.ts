import { Component, OnInit } from '@angular/core';
import { Episode } from '../episode.model';
import { Router } from '@angular/router';
import { EpisodeService } from '../episode.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
  providers: [EpisodeService]
})
export class ShopComponent implements OnInit {
  episodes: Episode[];

  constructor(private router: Router, private episodeService: EpisodeService) {}

  ngOnInit () {
    this.episodes = this.episodeService.getEpisodes();
  }

  goToDetailPage(clickedEpisode: Episode) {
    this.router.navigate(['episodes', clickedEpisode.id]);
  };

}
