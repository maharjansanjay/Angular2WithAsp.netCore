import { Routes, RouterModule } from '@angular/router';

import { HerosComponent }      from './heros.component';
import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component'

const appRoutes: Routes = [
    {
        path: '',
        component: DashboardComponent
    },
    {
        path: 'heroes',
        component: HerosComponent,
    },
    {
        path: 'dashboard',
        redirectTo: '',
        
    },
    {
        path: 'detail/:id',
        component: HeroDetailComponent
    }
];

export const routing = RouterModule.forRoot(appRoutes);
