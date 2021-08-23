import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListHomeComponent} from './components/list-home/list-home.component';
import {EditHomeComponent} from './components/edit-home/edit-home.component';
import {TimelinesComponent} from './components/timelines/timelines.component';


const routes: Routes = [
  {
    path: '',
    component: ListHomeComponent
  },
  {
    path: 'edit-home/:id',
    component: EditHomeComponent
  }, {
    path: 'timelines',
    component: TimelinesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
