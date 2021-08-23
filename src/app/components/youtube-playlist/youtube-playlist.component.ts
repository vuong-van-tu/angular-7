import { Component, OnInit } from '@angular/core';
import {SongService} from '../../services/song.service';
import {Song} from '../../models/song';

@Component({
  selector: 'app-youtube-playlist',
  templateUrl: './youtube-playlist.component.html',
  styleUrls: ['./youtube-playlist.component.scss']
})
export class YoutubePlaylistComponent implements OnInit {
  private playlist: Song[];

  constructor(private songService: SongService) { }

  ngOnInit() {
    this.getAll();
  }
  getAll() {
    this.playlist = this.songService.playlist;
  }
}
