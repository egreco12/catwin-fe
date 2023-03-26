import { Component, Input } from '@angular/core';
import { Competitor } from '../models/espn.model';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent {
  @Input
  ()competitors?: Competitor[];
}
