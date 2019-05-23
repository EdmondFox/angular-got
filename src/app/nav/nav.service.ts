import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavService {
  private title = 'Game of Thrones';

  constructor() { }

  getTitle() {
    return this.title;
  }
}
