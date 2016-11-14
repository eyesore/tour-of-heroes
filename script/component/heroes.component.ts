import {Component, OnInit} from '@angular/core';
import {Hero} from '../class/hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from '../service/hero.service';

@Component({
    selector: 'my-heroes',
    templateUrl: '/template/hero.html',
    styleUrls: ['/style/heroes.component.css']
})
export class HeroesComponent implements OnInit {
    title = 'Tour of Heroes';
    public heroes: Hero[];
    selectedHero: Hero;

    constructor(private heroService: HeroService) {}

    ngOnInit() {
        this.getHeroes();
    }

    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }

    getHeroes() {
        this.heroService.getHeroes().
        then(heroes => this.heroes = heroes);
    }
}
