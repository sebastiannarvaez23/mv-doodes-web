import { Component, Input } from '@angular/core';
import { Thumbnail } from 'src/app/characters/interfaces/character';

@Component({
    selector: 'shared-row',
    templateUrl: './row.component.html',
    styleUrls: ['./row.component.css'],
})
export class RowComponent {
    @Input() public id?: number;
    @Input() public img?: Thumbnail;
    @Input() public name?: string;
    @Input() public description?: string;

    getFullImageUrl(): string {
        if (this.img) {
            return `${this.img.path}.${this.img.extension}`;
        } else {
            return 'https://previews.123rf.com/images/tkacchuk/tkacchuk2004/tkacchuk200400017/143745488-no-hay-icono-de-imagen-vector-de-l%C3%ADnea-editable-no-hay-imagen-no-hay-foto-disponible-o-no-hay.jpg';
        }
    }
}