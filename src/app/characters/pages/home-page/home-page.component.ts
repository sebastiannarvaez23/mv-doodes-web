import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character.service';
import { Result } from '../../interfaces/character';

@Component({
    selector: 'character-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {

    public characters: Result[] | undefined = [];
    public currentPage: number = 1;
    public countPage: number = 1;
    public isLoading: boolean = false;

    constructor(private characterService: CharacterService) { }

    private initValues(): void {
        this.characters = this.characterService.cacheStore.characters;
        this.currentPage = this.characterService.cacheStore.currentPage;
        this.countPage = this.characterService.cacheStore.countPage;
    }

    ngOnInit(): void {
        this.isLoading = true;
        if (!localStorage.getItem('cacheStore')) {
            this.characterService.getCharacters()
                .subscribe(() => {
                    this.initValues();
                    this.isLoading = false;
                });
        } else {
            this.initValues();
            this.isLoading = false;
        };
    }

    nextPage(): void {
        if (this.currentPage < this.countPage) {
            this.isLoading = true;
            this.characterService.getCharacters(this.currentPage + 1)
                .subscribe(() => {
                    this.initValues();
                    this.isLoading = false;
                });
        }
    }

    beforePage(): void {
        this.isLoading = true;
        this.characterService.getCharacters(this.currentPage - 1)
            .subscribe(() => {
                this.initValues();
                this.isLoading = false;
            });
    }
}