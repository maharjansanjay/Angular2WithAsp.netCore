import { Injectable } from '@angular/core';
import { Hero } from '../models/hero';

import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise'

@Injectable()
export class HeroService {
    private heroesUrl = 'api/heros';
    constructor(private _http: Http) { }

    getHeroes(): Promise<Hero[]> {
        return this._http.get(this.heroesUrl)
            .toPromise()
            .then((response: Response) => response.json() as Hero[])
            .catch(this.handleError);
    }

    getHero(id: number): Promise<Hero> {
        return this.getHeroes()
            .then(heroes => heroes.find(hero => hero.id === id));
    }


    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
