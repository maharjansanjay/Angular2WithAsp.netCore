import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from '../app.component';
import { HeroDetailComponent } from '../hero-detail.component';
import { DashboardComponent } from '../dashboard.component'
import { HerosComponent } from '../heros.component'

import { routing }        from '../app.route';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing
    ],
    declarations: [
        AppComponent,
        HeroDetailComponent,
        DashboardComponent,
        HerosComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

