import { Component, Input } from '@angular/core';
import { Thumbnail } from '../../interfaces/character';

@Component({
    selector: 'character-image',
    templateUrl: './image.component.html',
    styleUrls: ['./image.component.css'],
})
export class ImageComponent {
    @Input() public img?: Thumbnail;
    @Input() public isLoading: boolean = true;

    getFullImageUrl(): string {
        if (this.img) {
            return `${this.img.path}.${this.img.extension}`;
        } else {
            return 'https://previews.123rf.com/images/tkacchuk/tkacchuk2004/tkacchuk200400017/143745488-no-hay-icono-de-imagen-vector-de-l%C3%ADnea-editable-no-hay-imagen-no-hay-foto-disponible-o-no-hay.jpg';
        }
    }
}