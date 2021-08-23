import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {DictionaryService} from '../../services/dictionary.service';
import {Iword} from '../../models/iword';

@Component({
  selector: 'app-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.scss']
})
export class DictionaryPageComponent implements OnInit {
  dictionaries: Iword[] = [];

  constructor(private dictionaryService: DictionaryService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.dictionaries = this.dictionaryService.getAll();
  }
}
