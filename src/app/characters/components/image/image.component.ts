import { Component, Input } from '@angular/core';
import { Thumbnail } from '../../interfaces/character';

@Component({
    selector: 'character-image',
    templateUrl: './image.component.html',
    styleUrls: ['./image.component.css'],
})
export class ImageComponent {
    @Input() public img?: Thumbnail;

    getFullImageUrl(): string {
        if (this.img) {
            return `${this.img.path}.${this.img.extension}`;
        } else {
            return 'assets/images/placeholder.png';
        }
    }
}