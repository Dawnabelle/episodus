import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Episode } from '../episode.model';
import { EpisodeService } from '../episode.service';

@Component({
  selector: 'app-episode-detail',
  templateUrl: './episode-detail.component.html',
  styleUrls: ['./episode-detail.component.css'],
  providers: [EpisodeService]
})

export class EpisodeDetailComponent implements OnInit {
  episodeId: number;
  episodeToDisplay: Episode;

  constructor(private route: ActivatedRoute,
    private location: Location,
    private EpisodeService: EpisodeService
  ) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.episodeId = parseInt(urlParameters['id']);
    });
    this.episodeToDisplay = this.EpisodeService.getEpisodeById(this.episodeId);
  }

}
