import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataService } from './data.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { AddActorComponent } from './add-actor/add-actor.component';


@NgModule({
  declarations: [
    AppComponent,
    AddMovieComponent,
    AddActorComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
