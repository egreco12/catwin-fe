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
  competitorsLosingToTigerWoods?: Competitor[];

  constructor(private leaderboardService: LeaderboardService) {}

  ngOnInit() {
    this.getLeaderboard();
    this.loadPlayersLosingToTigerWoods();
  }

  getLeaderboard(): void {
    this.leaderboardService.getEvent()
    .subscribe((data: Event) => {
        this.event = data;
        this.competitors = this.event.competitions[0].competitors.sort((a, b) => {
          if (a.statistics[0].value < b.statistics[0].value) {
            return -1;
          }

          if (a.statistics[0].value > b.statistics[0].value) {
            return 1;
          }

          return 0;
        });
        console.log(this.competitors);
    });
  }

  findTigerWoods(): number | undefined {
    return this.competitors?.findIndex(competitor => {
      return competitor.displayName === "Tiger Woods";
    });
  }

  loadPlayersLosingToTigerWoods(): void {
    const tw = this.findTigerWoods();
    if (tw !== undefined) {
      this.competitorsLosingToTigerWoods = this.competitors?.slice(tw);
    }
  }
}
