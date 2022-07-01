import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: 'Tom cruise' },
      { id: 13, name: 'Jamie foxx' },
      { id: 14, name: 'Keifer sutherland' },
      { id: 15, name: 'Chadwick boseman' },
      { id: 16, name: 'Idris elba' },
      { id: 17, name: 'Benedict Cumberbatch' },
      { id: 18, name: 'Chris hemsworth' },
      { id: 19, name: 'Chris evans' },
      { id: 20, name: 'Robert downey' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/