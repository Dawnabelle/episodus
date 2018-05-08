import { Component } from '@angular/core';
import { Episode } from '../episode.model';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  episodes: Episode[] = [
    new Episode("Cloudy with a Chance of Murder", "Psych", "A weathercaster is murdered and Sean and Gus must clear the name of wrongfully accused woman by finding the real murderer.", 0),
    new Episode("Mr. Monk and Sharona", "Monk", "Sharon returns to Monk when her uncles death becomes a case.", 1),
    new Episode("Baby Muriel", "Courage the Cowardly Dog", "A tornado turns Muriel into a toddler that Courage must protect.", 2)
  ];
}
