import { Component, Input } from '@angular/core';
import { Thumbnail } from 'src/app/characters/interfaces/character';

@Component({
    selector: 'shared-row',
    templateUrl: './row.component.html',
    styleUrls: ['./row.component.css'],
})
export class RowComponent {
    @Input() public img?: Thumbnail;
    @Input() public name?: string;
    @Input() public description?: string;

    getFullImageUrl(): string {
        if (this.img) {
            return `${this.img.path}.${this.img.extension}`;
        } else {
            return 'assets/images/placeholder.png';
        }
    }
}