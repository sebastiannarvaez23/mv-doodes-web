import { Component, Input } from '@angular/core';
import { Result } from 'src/app/characters/interfaces/character';

@Component({
    selector: 'shared-list-rows',
    templateUrl: './list-rows.component.html',
    styleUrls: ['./list-rows.component.css'],
})
export class ListRowsComponent {
    @Input() public data: Result[] = [];
}