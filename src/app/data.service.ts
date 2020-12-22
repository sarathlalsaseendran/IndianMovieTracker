import { Injectable } from '@angular/core';

import { Movie, Actor, Industry } from './models';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private industries: Array<Industry> = [
    {
      Code: 'Hindi',
      Name: 'Hindi',
    },
    {
      Code: 'Malayalam',
      Name: 'Malayalam',
    },
    {
      Code: 'Tamil',
      Name: 'Tamil',
    },
  ];

  private actors: Array<Actor> = [
    {
      Code: 'Aamir',
      Name: 'Aamir Khan',
      Industry: 'Hindi',
    },
    {
      Code: 'Amitabh',
      Name: 'Amitabh Bachchan',
      Industry: 'Hindi',
    },
    {
      Code: 'Kamal',
      Name: 'Kamal Hassan',
      Industry: 'Tamil',
    },
    {
      Code: 'Mammootty',
      Name: 'Mammootty',
      Industry: 'Malayalam',
    },
    {
      Code: 'Mohanlal',
      Name: 'Mohan Lal',
      Industry: 'Malayalam',
    },
    {
      Code: 'Rajini',
      Name: 'Rajini Kanth',
      Industry: 'Tamil',
    },
    {
      Code: 'Shahrukh',
      Name: 'Shahrukh Khan',
      Industry: 'Hindi',
    },
  ];

  constructor() {}

  getIndustries(): Array<Industry> {
    return this.industries;
  }

  getActors(): Array<Actor> {
    return this.actors;
  }
}
