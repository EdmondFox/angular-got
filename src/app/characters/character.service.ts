import { Injectable } from '@angular/core';
import { CHARACTERS } from '../mock.data';
import { Character } from '../character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  constructor() { }

  getCharacters(): Character[] {
    return CHARACTERS;
  }
}
