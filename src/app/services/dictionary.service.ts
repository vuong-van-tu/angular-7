import {Injectable} from '@angular/core';
import {Iword} from '../models/iword';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  dictionarylist: Iword[] = [
    {
      word: 'hello',
      mean: 'xin chào'
    }, {
      word: 'ROM',
      mean: 'Read Only Memory'
    }, {
      word: 'RAM',
      mean: 'Random Access Memory'
    }
  ];

  constructor() {
  }

  getAll() {
    return this.dictionarylist;
  }

  findByWord(id) {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.dictionarylist.length; i++) {
      if (this.dictionarylist[i].word === id) {
        return this.dictionarylist[i];
      }
    }
    return null;
  }
}
