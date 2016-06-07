import { Injectable } from '@angular/core';
import { Hero } from '../class/hero';
import { HEROES } from '../data/mock-heroes';

@Injectable()
export class HeroService {
    getHeroes() {
        return Promise.resolve(HEROES);
    }
    getHero(id: Number) {
        return Promise.resolve(HEROES).
            then(heroes => heroes.filter(hero => hero.id === id)[0]);
    }
    // See the "Take it slow" appendix
    getHeroesSlowly() {
        return new Promise<Hero[]>(resolve =>
            setTimeout(() => resolve(HEROES), 2000) // 2 seconds
        );
    }
}
