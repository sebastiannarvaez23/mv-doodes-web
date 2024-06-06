import { Result } from "./character";

export interface CacheStore {
    characters: Result[];
    currentPage: number;
    countPage: number;
}