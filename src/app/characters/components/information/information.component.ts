import { Component, Input } from '@angular/core';
import { Result } from '../../interfaces/character';

@Component({
    selector: 'character-information',
    templateUrl: './information.component.html',
    styleUrls: ['./information.component.css'],
})
export class InformationComponent {
    @Input() public character?: Result;
}