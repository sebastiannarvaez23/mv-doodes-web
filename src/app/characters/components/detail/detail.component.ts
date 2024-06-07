import { Component, Input, OnInit } from '@angular/core';
import { Result } from '../../interfaces/character';

@Component({
    selector: 'character-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.css'],
})
export class DetailComponent {
    @Input() public character?: Result;
    @Input() public isLoading: boolean = false;
    public comics: string[] = [];
    public series: string[] = [];
    public stories: string[] = [];
    public events: string[] = [];
}