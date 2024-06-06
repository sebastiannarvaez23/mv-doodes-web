import { Component, Input, OnInit } from '@angular/core';
import { Result } from 'src/app/characters/interfaces/character';
import { CharacterService } from 'src/app/characters/services/character.service';

@Component({
    selector: 'shared-list-rows',
    templateUrl: './list-rows.component.html',
    styleUrls: ['./list-rows.component.css'],
})
export class ListRowsComponent implements OnInit {
    @Input() public data: Result[] | undefined = [];
    public currentPage: number = 1;
    public countPage: number = 1;

    constructor(private characterService: CharacterService) { }

    ngOnInit(): void {
        this.currentPage = this.characterService.cacheStore.currentPage;
        this.countPage = this.characterService.cacheStore.countPage;
    }

    nextPage(): void {
        if (this.currentPage < this.countPage) {
            this.characterService.getCharacters(this.currentPage + 1)
                .subscribe(characters => {
                    this.data = characters?.data.results;
                    this.currentPage = this.currentPage + 1;
                });
        }
    }

    beforePage(): void {
        this.characterService.getCharacters(this.currentPage - 1)
            .subscribe(characters => {
                this.data = characters?.data.results;
                this.currentPage = this.currentPage - 1;
            });
    }
}