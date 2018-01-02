import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  movies;

  actors;
 
  constructor(private dataservice: DataService){}

  getMovies(){

    this.dataservice.getRecords("movies")
      .subscribe(moviesFromAPI => {
        this.movies = moviesFromAPI;
      })

  }

  getActors(){
    
        this.dataservice.getRecords("actors")
          .subscribe(actorsFromAPI => {
            this.actors = actorsFromAPI;
          })
    
      }

  ngOnInit(){
    this.getMovies();
    this.getActors();
  }

}
