
import { Component, OnInit } from '@angular/core';

import { PeopleService } from './people-list.service';
import { People } from './People';

@Component({
  moduleId: module.id,
  selector: 'people-list',
  templateUrl: './people-list.component.html'
})
export class PeopleListComponent implements OnInit {

  people: People[];
  selectedPerson: person; //****************************************************************


  constructor(
    private peopleService: PeopleService
  ){}

  ngOnInit() {

    this.loadDataPeople() // get the people, uitvoeren van de load datapeople methode
  }

  //als er een person geselecteerd wordt
  onSelect(person: Person): void {
    this.selectedPerson = Person;
  }


  loadDataPeople() {
    this.peopleService.getPeople()
      .subscribe(
        people => this.people = people, //Bind to view
        err => {
          console.log(err); // Logged eventuele errors
        });
  }

  trackByName(index:number, people:People) {
    
    return people.name;
  }
}
