import { Component, OnInit } from '@angular/core';

import { DataService } from './data.service';
import { Movie, Actor, Industry } from './models';
import { MongoService } from './mongo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'IndianMovieTracker';
  movies: Array<Movie>;
  actors: Array<Actor>;
  industries: Array<Industry>;

  selectedIndustry: string;
  selectedActor: string;
  selectedLanguage: string;
  selectedDirector: string;
  selectedYear: string;

  selectedActors: Array<Industry>;
  selectedMovies: Array<Movie>;

  filteredMovies: Array<Movie>;

  groupedLanguages: any;
  groupedDirectors: any;
  groupedYears: any;
  groupedActors: any;

  constructor(
    private service: DataService,
    private mongoService: MongoService
  ) {}

  ngOnInit() {
    this.getMovies();
    this.getActors();
    this.getIndustries();
  }

  getIndustries() {
    this.industries = this.service.getIndustries();
  }

  getActors() {
    this.actors = this.service.getActors();
  }

  getMovies() {
    this.mongoService.GetMovies().subscribe((data: any) => {
      this.movies = data;
    });
  }

  onIndustrySelected() {
    if (this.selectedIndustry == 'All Industries') {
      this.selectedActors = this.actors;
    } else {
      this.selectedActors = this.actors.filter(
        (x) => x.Industry == this.selectedIndustry
      );
    }
    this.selectedActor = undefined;
    this.selectedMovies = undefined;
    this.selectedDirector = undefined;
    this.selectedYear = undefined;
  }

  onActorSelected() {
    this.selectedMovies = this.movies.filter(
      (x) => x.Actor == this.selectedActor
    );
    this.selectedMovies = this.selectedMovies.sort((a, b) => a.Year - b.Year);
    this.filteredMovies = this.selectedMovies;
    this.selectedLanguage = undefined;
    this.selectedDirector = undefined;
    this.selectedYear = undefined;

    this.groupedLanguages = this.selectedMovies.reduce((p, c) => {
      var name = c.Language;
      if (!p.hasOwnProperty(name)) {
        p[name] = 0;
      }
      p[name]++;
      return p;
    }, {});

    this.groupedDirectors = this.selectedMovies.reduce((p, c) => {
      var name = c.Director;
      if (!p.hasOwnProperty(name)) {
        p[name] = 0;
      }
      p[name]++;
      return p;
    }, {});

    this.groupedYears = this.selectedMovies.reduce((p, c) => {
      var name = c.Year;
      if (!p.hasOwnProperty(name)) {
        p[name] = 0;
      }
      p[name]++;
      return p;
    }, {});
  }

  onLanguageSelected() {
    this.selectedDirector = undefined;
    this.selectedYear = undefined;
    if (
      this.selectedLanguage == 'All' ||
      this.selectedLanguage == 'undefined'
    ) {
      this.filteredMovies = this.selectedMovies;
    } else {
      this.filteredMovies = this.selectedMovies.filter(
        (x) => x.Language == this.selectedLanguage
      );
    }
  }

  onDirectorSelected() {
    this.selectedLanguage = undefined;
    this.selectedYear = undefined;
    if (
      this.selectedDirector == 'All' ||
      this.selectedDirector == 'undefined'
    ) {
      this.filteredMovies = this.selectedMovies;
    } else {
      this.filteredMovies = this.selectedMovies.filter(
        (x) => x.Director == this.selectedDirector
      );
    }
  }

  onYearSelected() {
    this.selectedLanguage = undefined;
    this.selectedDirector = undefined;
    if (this.selectedYear == 'All' || this.selectedDirector == 'undefined') {
      this.filteredMovies = this.selectedMovies;
    } else {
      this.filteredMovies = this.selectedMovies.filter(
        (x) => x.Year == +this.selectedYear
      );
    }
  }
}
