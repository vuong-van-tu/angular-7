import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { ListHomeComponent } from './components/list-home/list-home.component';
import { EditHomeComponent } from './components/edit-home/edit-home.component';
import {ReactiveFormsModule} from '@angular/forms';
import {TimelinesComponent} from './components/timelines/timelines.component';
import {YoutubePlaylistComponent} from './components/youtube-playlist/youtube-playlist.component';
import { YoutubePlayerComponent } from './components/youtube-player/youtube-player.component';
import { ProductCreateComponent } from './components/product-create/product-create.component';
import { ProductListComponent } from './components/product-list/product-list.component';




@NgModule({
  declarations: [
    AppComponent,
    ListHomeComponent,
    EditHomeComponent,
    TimelinesComponent,
    YoutubePlaylistComponent,
    YoutubePlayerComponent,
    ProductCreateComponent,
    ProductListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
