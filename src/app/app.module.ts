import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';

import { AppRoutingModule }  from './app.routing.module';
import { HttpModule, JsonpModule } from '@angular/http';


/*import { FilmListComponent } from './Film/film-list.component';*/
import { PeopleListComponent } from './People/people-list.component';
import { PlanetListComponent } from './Planet/planet-list.component';
import { SpeciesListComponent } from './Species/species-list.component';
/*import { StarshipListComponent } from './Starship/starship-list.component';*/
/*import { VehicleListComponent } from './Vehicle/vehicle-list.component';*/

/*import { FilmService } from './Film/film-list.service';*/
import { PlanetService } from './Planet/planet-list.service';
import { PeopleService } from "./People/people-list.service";
import { SpeciesService } from "./Species/species-list.service";
/*import { StarshipService } from "./Starship/starship-list.service";
import { VehicleService } from "./Vehicle/vehicle-list.service";*/

@NgModule({
  declarations: [
    AppComponent,
  /*FilmListComponent,*/
    PeopleListComponent,
    PlanetListComponent,
    SpeciesListComponent
    /*StarshipListComponent,
    VehicleListComponent*/
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    /*FilmService,*/
    PeopleService,
    PlanetService,
    SpeciesService
    /*StarshipService,
    VehicleService*/
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
