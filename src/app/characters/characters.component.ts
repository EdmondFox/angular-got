import { Component, OnInit } from '@angular/core';
import { Character } from '../character';
import { CHARACTERS } from '../mock.data';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: [ './characters.component.css' ]
})
export class CharactersComponent implements OnInit {
  // character: Character = {
  //   id: 1,
  //   name: 'Tyrion',
  //   status: 'alive'
  // };

  characters = CHARACTERS;

  constructor() { }

  ngOnInit() {
  }

}
