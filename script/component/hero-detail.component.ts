import {Component, Input, OnInit} from '@angular/core';
import {HeroService} from '../service/hero.service';
import {Hero} from '../class/hero';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';

@Component({
    selector: 'my-hero-detail',
    templateUrl: '/template/hero-detail.component.html',
    styleUrls: ['/style/hero-detail.component.css'],
})
export class HeroDetailComponent implements OnInit {
    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location
    ) {    }
    hero: Hero;
    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.heroService.getHero(id).
            then(hero => this.hero = hero);
        });
    }
    goBack() {
        this.location.back();
    }
}
