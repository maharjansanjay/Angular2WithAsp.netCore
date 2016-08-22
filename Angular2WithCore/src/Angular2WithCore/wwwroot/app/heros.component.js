"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var heros_service_1 = require('./services/heros.service');
var HerosComponent = (function () {
    function HerosComponent(heroService) {
        this.heroService = heroService;
    }
    HerosComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService.getHeroes().then(function (heroes) { return _this.heroes = heroes; });
    };
    HerosComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    HerosComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    HerosComponent = __decorate([
        core_1.Component({
            selector: 'my-heros',
            templateUrl: 'app/heros.component.html',
            styleUrls: ['app/heros.component.css'],
            providers: [heros_service_1.HeroService]
        }), 
        __metadata('design:paramtypes', [heros_service_1.HeroService])
    ], HerosComponent);
    return HerosComponent;
}());
exports.HerosComponent = HerosComponent;
//# sourceMappingURL=heros.component.js.map