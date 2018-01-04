import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-add-actor',
  templateUrl: './add-actor.component.html',
  styleUrls: ['./add-actor.component.css']
})
export class AddActorComponent implements OnInit {

  actors;

  getActors() {
    this.dataservice.getRecords("actors")
      .subscribe(actorsFromAPI => { 
        this.actors = actorsFromAPI; 
      })
  }

  constructor(private dataservice: DataService) { }

  ngOnInit() {
    this.getActors();
  }

  actorFormSubmit(formData: NgForm) {
    this.dataservice.addRecord("actors", formData.value)
      .subscribe(actorFromAPI => {
        this.getActors()
      })
  }

}
