import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from '../../services/character.service';
import { Result } from '../../interfaces/character';

@Component({
    selector: 'character-character-page',
    templateUrl: './character-page.component.html',
    styleUrls: ['./character-page.component.css'],
})
export class CharacterPageComponent implements OnInit {
    public characterId?: string;
    public character: Result | undefined;
    public isLoading: boolean = true;

    constructor(
        private route: ActivatedRoute,
        private characterService: CharacterService,
    ) { }

    ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
            this.characterId = params.get('id') || '';
        });
        if (this.characterId) {
            this.isLoading = true;
            this.characterService.getCharacter(this.characterId).
                subscribe(character => {
                    this.character = character?.data.results[0]
                    this.isLoading = false;
                });
        }
    }
}