import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListHomeComponent} from './components/list-home/list-home.component';
import {EditHomeComponent} from './components/edit-home/edit-home.component';
import {TimelinesComponent} from './components/timelines/timelines.component';
import {YoutubePlaylistComponent} from './components/youtube-playlist/youtube-playlist.component';
import {YoutubePlayerComponent} from './components/youtube-player/youtube-player.component';
import {ProductListComponent} from './components/product-list/product-list.component';
import {ProductCreateComponent} from './components/product-create/product-create.component';
import {DictionaryPageComponent} from './components/dictionary-page/dictionary-page.component';
import {DictionaryDetailComponent} from './components/dictionary-detail/dictionary-detail.component';
import {ProductEditComponent} from './components/product-edit/product-edit.component';


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
  },
  {
    path: 'youtube',
    component: YoutubePlaylistComponent,
    children: [{
      path: ':id',
      component: YoutubePlayerComponent
    }]
  }, {
    path: 'product',
    children: [
      {
        path: 'list',
        component: ProductListComponent
      },
      {
        path: 'create',
        component: ProductCreateComponent
      },
      {
        path: 'edit/:id',
        component: ProductEditComponent
      }
    ]
  }, {
    path: 'dictionaries',
    component: DictionaryPageComponent
  }, {
    path: 'dictionaries/:word',
    component: DictionaryDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
