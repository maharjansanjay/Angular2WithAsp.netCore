﻿import { Component, OnInit} from '@angular/core';
import {Hero} from './models/hero';
import { HeroService } from './services/heros.service'
import { Router } from '@angular/router';

@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/dashboard.component.html',
    styleUrls: ['app/dashboard.component.css'],
    providers: [HeroService]
})
export class DashboardComponent implements OnInit {
    heroes: Hero[] = [];


    constructor(private heroService: HeroService, private router: Router) { }

    ngOnInit(): void {
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(0, 5));
    }

    gotoDetail(hero: Hero): void {
        let link = ['/detail', hero.id];
        this.router.navigate(link);
    }

}
