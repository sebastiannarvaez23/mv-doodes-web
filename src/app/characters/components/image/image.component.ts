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
            return 'assets/images/placeholder.png';
        }
    }
}