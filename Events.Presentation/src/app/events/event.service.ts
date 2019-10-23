import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import {  Router } from '@angular/router'

import { IEvent } from './event';

@Injectable({
    providedIn: 'root'
})
export class EventService {

    private Url: string = 'http://localhost:8717/api/events';

    constructor(private http: HttpClient, private router: Router
        ) {

    }

    getEvents(): Observable<IEvent[]> {

        return this.http.get<IEvent[]>(this.Url)
            .pipe(
                //tap(data => console.log('All: ' + JSON.stringify(data))),
                catchError(this.handleError)
            );

    }
    getEvent(id: number): Observable<IEvent | undefined> {
        return this.http.get<IEvent>(this.Url+'/'+id)
            .pipe(
                //tap(data => console.log('Event: ' + JSON.stringify(data))),
                catchError(this.handleError)
            );
    }
    private handleError(err: HttpErrorResponse) {
                let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            // A client-side or network error occurred.
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }
}
