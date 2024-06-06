import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, map, delay, tap } from 'rxjs';
import { CacheStore } from '../interfaces/cache-store';
import { CharacterResponse } from '../interfaces/character';
import { getEndpointSecurity } from '../utils/hash';

@Injectable({ providedIn: 'root' })
export class CharacterService {

    private security = getEndpointSecurity();
    private apiUrl: string = 'https://gateway.marvel.com:443/v1/public/characters';

    public cacheStore: CacheStore = {
        characters: []
    }

    constructor(private http: HttpClient) {
        this.loadFromLocalStorage();
    }

    private saveToLocalStorage() {
        localStorage.setItem('cacheStore', JSON.stringify('cacheStore'));
    }

    private loadFromLocalStorage() {
        if (!localStorage.getItem('cacheStore')) return;
        localStorage.getItem('cacheStore');
        this.cacheStore = JSON.parse(localStorage.getItem('cacheStore')!);
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

    getCharacters(): Observable<CharacterResponse | null> {
        const url: string = `${this.apiUrl}?${this.security}`;
        return this.http.get<CharacterResponse>(url)
            .pipe(
                map(characters => characters),
                tap(() => this.saveToLocalStorage()),
                catchError(() => of(null))
            );
    }

}