import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {AppComponent} from './component/app.component';
import {HeroDetailComponent} from './component/hero-detail.component';
import {HeroesComponent} from './component/heroes.component';
import {DashboardComponent} from './component/dashboard.component';
import {HeroService} from './service/hero.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,

        RouterModule.forRoot([
            {
                path: '',
                redirectTo: '/dashboard',
                pathMatch: 'full'
            },
            {
                path: 'heroes',
                component: HeroesComponent
            },
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'detail/:id',
                component: HeroDetailComponent
            }
        ])
    ],
    declarations: [
        AppComponent,
        HeroDetailComponent,
        HeroesComponent,
        DashboardComponent
    ],
    providers: [HeroService],
    bootstrap: [AppComponent]
})
export class AppModule{}
