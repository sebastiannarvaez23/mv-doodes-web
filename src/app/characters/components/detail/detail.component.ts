import { Component, Input, OnInit } from '@angular/core';
import { Result } from '../../interfaces/character';

@Component({
    selector: 'character-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
    @Input() public character?: Result;
    public comics: string[] = [];
    public series: string[] = [];
    public stories: string[] = [];
    public events: string[] = [];

    ngOnInit(): void {
        console.log(this.character);
        this.character?.comics.items.forEach(element => {
            console.log(element.name)
            this.comics.push(element.name);
        });

        this.character?.series.items.forEach(element => {
            this.comics.push(element.name);
        });

        this.character?.stories.items.forEach(element => {
            this.comics.push(element.name);
        });

        this.character?.events.items.forEach(element => {
            this.comics.push(element.name);
        });
    }

}