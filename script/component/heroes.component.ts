import {Component, OnInit} from '@angular/core';
import {Hero} from '../class/hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from '../service/hero.service';
import {Router} from '@angular/router-deprecated';

@Component({
    selector: 'my-heroes',
    templateUrl: 'template/hero.html',
    directives: [HeroDetailComponent],
    providers: [HeroService],
    styleUrls: ['style/heroes.component.css'],
})
export class HeroesComponent implements OnInit {
    title = 'Tour of Heroes';
    public heroes: Hero[];
    selectedHero: Hero;

    constructor(private heroService: HeroService, private router: Router) {}

    ngOnInit() {
        this.getHeroes();
    }

    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }

    gotoDetail() {
        let link = ['HeroDetail', {id: this.selectedHero.id}];
        this.router.navigate(link);
    }

    getHeroes() {
        this.heroService.getHeroes().
        then(heroes => this.heroes = heroes);
    }
}
