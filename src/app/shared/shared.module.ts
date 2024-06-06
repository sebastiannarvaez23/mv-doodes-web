import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ListRowsComponent } from './components/list-rows/list-rows.component';
import { RowComponent } from './components/row/row.component';
import { RouterModule } from '@angular/router';
import { CharacterRoutingModule } from '../characters/character-routing.module';
import { RowLoadingComponent } from './components/row-loading/row-loading.component';

@NgModule({
    declarations: [
        ListRowsComponent,
        RowComponent,
        RowLoadingComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        CharacterRoutingModule
    ],
    exports: [
        ListRowsComponent
    ]
})
export class SharedModule { }
