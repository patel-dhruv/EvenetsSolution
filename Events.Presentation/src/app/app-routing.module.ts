import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsListComponent } from './events/events-list.component';
import { EventDetailsComponent } from './events/event-details.component';
import { EventDetailGuard } from './events/event-detail.guard';

const routes: Routes = [
    { path: 'events', component: EventsListComponent },
    { path: 'events/:id', canActivate: [EventDetailGuard], component: EventDetailsComponent },
    { path: '', component: EventsListComponent, pathMatch: 'full' },
    { path: '**', redirectTo: 'EventsListComponent', pathMatch: 'full' }
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
