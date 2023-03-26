import { Component, Input } from '@angular/core';
import { Competitor, Event } from '../models/espn.model';
import { LeaderboardService } from './leaderboard.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent {
  event?: Event;
  competitors?: Competitor[];

  constructor(private leaderboardService: LeaderboardService) {}

  ngOnInit() {
    this.getLeaderboard();
  }

  getLeaderboard(): void {
    this.leaderboardService.getEvent()
    .subscribe((data: Event) => {
        this.event = data;
        this.competitors = this.event.competitions[0].competitors;
        console.log("competitors: ", this.competitors);
    });
  }
}
