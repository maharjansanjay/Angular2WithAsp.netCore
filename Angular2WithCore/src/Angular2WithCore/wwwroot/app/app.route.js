"use strict";
var router_1 = require('@angular/router');
var heros_component_1 = require('./heros.component');
var dashboard_component_1 = require('./dashboard.component');
var hero_detail_component_1 = require('./hero-detail.component');
var appRoutes = [
    {
        path: '',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'heroes',
        component: heros_component_1.HerosComponent,
    },
    {
        path: 'dashboard',
        redirectTo: '',
    },
    {
        path: 'detail/:id',
        component: hero_detail_component_1.HeroDetailComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.route.js.map