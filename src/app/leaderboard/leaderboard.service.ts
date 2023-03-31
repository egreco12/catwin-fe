import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Event } from '../models/espn.model';

const ENDPOINT: string = "https://catwin-be-dot-isthecatwinning.uc.r.appspot.com/events";

@Injectable({
  providedIn: 'root'
})
export class LeaderboardService {

  constructor(private http: HttpClient) { }

  getEvent(): Observable<Event>{
    return this.http.get<Event>(ENDPOINT);
  }
}
