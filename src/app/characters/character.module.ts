import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { SharedModule } from '../shared/shared.module';
import { InformationComponent } from './components/information/information.component';
import { DetailComponent } from './components/detail/detail.component';
import { ImageComponent } from './components/image/image.component';
import { CharacterPageComponent } from './pages/character-page/character-page.component';

@NgModule({
    declarations: [
        HomePageComponent,
        CharacterPageComponent,
        InformationComponent,
        DetailComponent,
        ImageComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
    ]
})
export class CharacterModule { }
