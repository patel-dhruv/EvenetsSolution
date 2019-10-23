import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule, MatCardModule, MatButtonModule, MatProgressSpinnerModule,MatDividerModule } from '@angular/material';

import { EventsListComponent } from './events/events-list.component';
import { EventDetailsComponent } from './events/event-details.component';
import { LoaderComponent } from './shared/loader.component';


@NgModule({
    declarations: [
        AppComponent,
        EventsListComponent,
        EventDetailsComponent,
        LoaderComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatListModule,
        MatCardModule,
        MatButtonModule,
        MatProgressSpinnerModule,
        HttpClientModule,
        MatDividerModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
