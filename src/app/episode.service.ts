import { Injectable } from '@angular/core';
import { Episode } from './episode.model';
import { EPISODES } from './mock-episodes';

@Injectable()
export class EpisodeService {

  constructor() { }

  getEpisodes() {
    return EPISODES;
  }

  getEpisodeById(episodeId: number){
    for (let i = 0; i <= EPISODES.length - 1; i++) {
      if (EPISODES[i].id === episodeId) {
        return EPISODES[i];
      }
    }
  }

}
