import { Component, OnInit } from '@angular/core';
import { Hero } from './models/hero';
import {HeroService} from './services/heros.service'


@Component({
    selector: 'my-heros',
    templateUrl: 'app/heros.component.html',
    styleUrls: ['app/heros.component.css'],
    providers: [HeroService]
})
export class HerosComponent implements OnInit {
    heroes: Hero[];
    selectedHero: Hero;
    constructor(private heroService: HeroService) { }
    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
    ngOnInit(): void {
        this.getHeroes();
    }
    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
}

