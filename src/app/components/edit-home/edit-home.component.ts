import {Component, OnInit} from '@angular/core';
import {HomeService} from '../../services/home.service';
import {Home} from '../../models/home';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-home',
  templateUrl: './edit-home.component.html',
  styleUrls: ['./edit-home.component.scss']
})
export class EditHomeComponent implements OnInit {
  home: Home;

  constructor(private homeService: HomeService,
              private activatedRoute: ActivatedRoute,
              private fb: FormBuilder) {
  }

  homeForm: FormGroup = this.fb.group({
    home_Name: new FormControl('', Validators.required),
    type_Room: new FormControl('', Validators.required),
    type_Home: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    num_Bedroom: new FormControl('', Validators.required),
    num_Bathroom: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required)
  });

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramap => {
      const id = paramap.get(`id`);
      this.homeService.getById(id).subscribe(result => {
        this.home = result;
      }, error => {
        console.log(error);
      });
    });
    this.home = {
      home_Name: '',
      type_Room: '',
      type_Home: '',
      address: '',
      num_Bedroom: '',
      num_Bathroom: '',
      description: '',
      price: ''
    };
  }

  updateForm() {
    const home = this.homeForm.value;
    this.homeService.updateHome(this.home.id, home).subscribe(() => {
      alert('Thành công');
    });
  }

  deleteHome() {
    this.homeService.deleteHome(this.home.id).subscribe(() => {
      alert('Xóa thành công');
    });
  }
}
