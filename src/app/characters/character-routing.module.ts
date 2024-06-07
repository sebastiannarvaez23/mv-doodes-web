import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from "./pages/home-page/home-page.component";
import { CharacterPageComponent } from "./pages/character-page/character-page.component";


const routes: Routes = [
    {
        path: 'list',
        component: HomePageComponent
    },
    {
        path: ':id',
        component: CharacterPageComponent
    },
    {
        path: '**',
        redirectTo: 'list'
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class CharacterRoutingModule { }