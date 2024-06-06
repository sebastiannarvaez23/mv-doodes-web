import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character.service';
import { Result } from '../../interfaces/character';

@Component({
    selector: 'character-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {

    characters: Result[] | undefined = [];

    constructor(private characterService: CharacterService) { }

    ngOnInit(): void {
        if (!localStorage.getItem('cacheStore')) {
            this.characterService.getCharacters()
                .subscribe(characters => this.characters = characters?.data.results);
        } else {
            this.characters = this.characterService.cacheStore.characters;
        };
    }
}