
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { PeopleListComponent } from './People/people-list.component';
import { PlanetListComponent } from './Planet/planet-list.component';
import { SpeciesListComponent } from './Species/species-list.component';


const appRoutes: Routes = [
  { path: '', redirectTo: 'people', pathMatch: 'full' },
  { path: 'planet', component: PlanetListComponent },
  { path: 'people', component: PeopleListComponent },
  { path: 'species', component: SpeciesListComponent }

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
