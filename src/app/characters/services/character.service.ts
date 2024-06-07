import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, map, delay, tap } from 'rxjs';
import { CacheStore } from '../interfaces/cache-store';
import { CharacterResponse } from '../interfaces/character';
import { getEndpointSecurity } from '../utils/hash';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class CharacterService {

    private security = getEndpointSecurity();
    private apiUrl: string = environment.apiUrl;
    private limit = 5;

    public cacheStore: CacheStore = {
        characters: [],
        currentPage: 1,
        countPage: 1,
    }

    constructor(private http: HttpClient) {
        this.loadFromLocalStorage();
    }

    private saveToLocalStorage() {
        localStorage.setItem('cacheStore', JSON.stringify(this.cacheStore));
    }

    private loadFromLocalStorage() {
        if (!localStorage.getItem('cacheStore')) return;
        localStorage.getItem('cacheStore');
        this.cacheStore = JSON.parse(localStorage.getItem('cacheStore')!);
    }

    private getCountPage(elements: number): number {
        const totalCharacters: number = elements;
        const elementsPerPage: number = 5;

        const pageCount: number = totalCharacters % elementsPerPage > 0 ?
            Math.floor(totalCharacters / elementsPerPage) + 1 :
            Math.floor(totalCharacters / elementsPerPage);

        return pageCount;
    }

    getCharacter(characterId: string): Observable<CharacterResponse | null> {
        const url: string = `${this.apiUrl}/${characterId}?${this.security}`;
        return this.http.get<CharacterResponse>(url)
            .pipe(
                map(character => character),
                tap(() => this.saveToLocalStorage()),
                catchError(() => of(null))
            );
    }

    getCharacters(page: number = 1): Observable<CharacterResponse | null> {
        const offset = (page - 1) * this.limit;
        const url: string = `${this.apiUrl}?offset=${offset}&limit=${this.limit}&${this.security}`;
        return this.http.get<CharacterResponse>(url)
            .pipe(
                map(character => character),
                tap(characters => {
                    this.cacheStore = {
                        countPage: this.getCountPage(characters.data.total),
                        currentPage: page,
                        characters: characters.data.results
                    }
                }),
                tap(() => this.saveToLocalStorage()),
                catchError(() => of(null))
            );
    }
}