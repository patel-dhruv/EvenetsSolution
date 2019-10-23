import { Component, OnInit } from '@angular/core';
import { IEvent } from './event';
import { EventService } from './event.service';

@Component({
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

    constructor(private eventService : EventService) { }
    Events: IEvent[];
    errorMessage: string;
    show: boolean = true;
    ngOnInit() {
        //setTimeout(() => {
            this.eventService.getEvents().subscribe({
                next: events => {
                    this.show = false;
                    this.Events = events;
                },
                //error: err => {
                //    this.show = false;
                //    this.errorMessage = err
                //}
            });
        //}, 1000);
       
  }

}
