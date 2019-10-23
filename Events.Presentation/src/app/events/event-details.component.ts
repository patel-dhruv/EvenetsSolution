import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { IEvent } from './event';
import { EventService } from './event.service';

@Component({
    selector: 'app-event-details',
    templateUrl: './event-details.component.html',
    styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

    event: IEvent;
    show: boolean = true;
    constructor(private route: ActivatedRoute, private router: Router, private eventService: EventService) { }

    ngOnInit() {
        
        let id = this.route.snapshot.paramMap.get('id');
        //setTimeout(() => {
            this.eventService.getEvent(parseInt(id)).subscribe({
                next: event => {
                    this.show = false;
                    this.event = event;
                }
            });
        //}, 1000);
    }
    onBack(): void {
        this.router.navigate(['/events']);
    }

}
