import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

//By default, the Angular CLI command ng generate service registers a provider
//with the root injector for your service by including provider metadata,
//that is providedIn: 'root' in the @Injectable() decorator.

@Injectable({
  providedIn: 'root' //provider metadata
})

export class HeroService {

  constructor(private messageService: MessageService) { }

  // getHeroes(): Hero[] { //SYNC
  //   return HEROES;
  // }

  getHeroes(): Observable<Hero[]> { //ASYNC
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
}
