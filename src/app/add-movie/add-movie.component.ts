import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  movies;

  constructor(private dataservice: DataService) { }

  getMovies() {

    this.dataservice.getRecords("movies")
      .subscribe(moviesFromAPI => {
        this.movies = moviesFromAPI;
      })

  }

  movieFormSubmit(formData: NgForm) {
    this.dataservice.addRecord("movies", formData.value)
      .subscribe(movieFromAPI => {
        this.getMovies()
      })
  }

  ngOnInit() {
    this.getMovies();
  }



}
