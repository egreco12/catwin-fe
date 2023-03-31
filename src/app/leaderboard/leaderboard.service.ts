import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Event } from '../models/espn.model';

const ENDPOINT: string = "http://localhost:8081/events";

@Injectable({
  providedIn: 'root'
})
export class LeaderboardService {

  constructor(private http: HttpClient) { }

  getEvent(): Observable<Event>{
    return this.http.get<Event>(ENDPOINT);
  }
}
