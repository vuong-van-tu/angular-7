import {Component, OnInit} from '@angular/core';
import {Home} from '../../models/home';
import {HomeService} from '../../services/home.service';

@Component({
  selector: 'app-list-home',
  templateUrl: './list-home.component.html',
  styleUrls: ['./list-home.component.scss']
})
export class ListHomeComponent implements OnInit {
  homes: Home[];

  constructor(private homeService: HomeService) {
  }

  ngOnInit() {
    this.homeService.getAll().subscribe(result => {
      this.homes = result;
      console.log(result);
    }, error => {
      console.log(error);
    });
  }

}
