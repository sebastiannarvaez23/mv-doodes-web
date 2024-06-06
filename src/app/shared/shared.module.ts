import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ListRowsComponent } from './components/list-rows/list-rows.component';
import { RowComponent } from './components/row/row.component';

@NgModule({
    declarations: [
        ListRowsComponent,
        RowComponent
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        ListRowsComponent
    ]
})
export class SharedModule { }
