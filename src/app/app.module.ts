import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';

import { AppRoutingModule }  from './app.routing.module';
import { HttpModule, JsonpModule } from '@angular/http';


import { PeopleListComponent } from './People/people-list.component';
import { PlanetListComponent } from './Planet/planet-list.component';
import { SpeciesListComponent } from './Species/species-list.component';


import { PlanetService } from './Planet/planet-list.service';
import { PeopleService } from "./People/people-list.service";
import { SpeciesService } from "./Species/species-list.service";


@NgModule({
  declarations: [
    AppComponent,
    PeopleListComponent,
    PlanetListComponent,
    SpeciesListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    PeopleService,
    PlanetService,
    SpeciesService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
