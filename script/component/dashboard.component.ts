import { Component, OnInit } from '@angular/core';
import {Hero} from '../class/hero';
import {HeroService} from '../service/hero.service';

@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: '/template/dashboard.component.html',
    styleUrls: ['/style/dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
    public heroes: Hero[];
    public selectedHero: Hero;
    constructor(private heroService: HeroService) { }
    gotoDetail(hero: Hero) {
        let link = ['HeroDetail', { id: hero.id }];
        // this.router.navigate(link);
    }
    ngOnInit() {
        this.heroService.getHeroes().
        then(heroes => this.heroes = heroes.slice(1, 5))
    }
}
