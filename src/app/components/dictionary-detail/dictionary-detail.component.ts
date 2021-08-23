import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {DictionaryService} from '../../services/dictionary.service';
import {Iword} from '../../models/iword';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.scss']
})
export class DictionaryDetailComponent implements OnInit {
  dictionary: Iword = {};
  constructor(private dictionaryService: DictionaryService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('word');
      console.log(id);
      // @ts-ignore
      this.dictionary = this.dictionaryService.findByWord(id);
    });
  }

}
