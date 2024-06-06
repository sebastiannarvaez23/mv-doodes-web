import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Result } from 'src/app/characters/interfaces/character';

@Component({
    selector: 'shared-list-rows',
    templateUrl: './list-rows.component.html',
    styleUrls: ['./list-rows.component.css'],
})
export class ListRowsComponent {
    @Input() public data: Result[] | undefined = [];
    @Input() public isLoading: boolean = false;
    @Input() public currentPage: number = 1;
    @Input() public countPage: number = 1;
    @Output() public onNextPage: EventEmitter<void> = new EventEmitter();
    @Output() public onBeforePage: EventEmitter<void> = new EventEmitter();

    nextPage(): void {
        this.onNextPage.emit();
    }

    beforePage(): void {
        this.onBeforePage.emit();
    }
}