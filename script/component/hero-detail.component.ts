import {Component, Input, OnInit} from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';
import {HeroService} from '../service/hero.service';
import {Hero} from '../class/hero';

@Component({
    selector: 'my-hero-detail',
    templateUrl: 'template/hero-detail.component.html',
    styleUrls: ['style/hero-detail.component.css'],
})
export class HeroDetailComponent implements OnInit {
    constructor(
        private routeParams: RouteParams,
        private heroService: HeroService) {    }
    hero: Hero;
    ngOnInit() {
        let id = +this.routeParams.get('id');
        this.heroService.getHero(id).
            then(hero => this.hero = hero);
    }
    goBack() {
        window.history.back();
    }
}
