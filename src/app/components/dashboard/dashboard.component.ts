import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ServiceService } from '../../shared/service/service.service';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable  } from 'angularfire2/database'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers:[ServiceService]
})
export class DashboardComponent implements OnInit {

  private api_key: string = 'AIzaSyClYrtbjAV4VrIJ20O-Hd_0Kzpo4IYqxhs';
  private maxVideosCount = 8;
  private userId = 'UCHJavQMlBOBmxeo7zR6I3LQ';
  recommendedVideos: FirebaseListObservable<any[]>;
  videosLists = [];
  mostWatchedVideosLists = [];

  constructor(db: AngularFireDatabase, private _http: ServiceService, private router:Router) { 
     this.recommendedVideos = db.list('recommendedVideos');
  }

  bindVideosinView(result){
    let videosList = result.items;
    videosList.forEach(videos => {
      let videothumbnail = videos.snippet.thumbnails.high.url; // default, medium or high

      let videoDetail = {
        videoid : videos.id.videoId,
        videotitle : videos.snippet.title,
        videodescription : videos.snippet.description,
        videodate : videos.snippet.publishedAt.split('T')[0], // date time published
        videothumbnail : videothumbnail,
        url : "https://www.youtube.com/watch?v=" + videos.id.videoId 
      }

      this.videosLists.push(videoDetail);
    });
  }

    bindmostwatchedVideosinView(result){
      let videosList = result.items;
      videosList.forEach(videos => {
      let videothumbnail = videos.snippet.thumbnails.high.url; // default, medium or high

      let videoDetail = {
        videoid : videos.id.videoId,
        videotitle : videos.snippet.title,
        videodescription : videos.snippet.description,
        videodate : videos.snippet.publishedAt.split('T')[0], // date time published
        videothumbnail : videothumbnail,
        url : "https://www.youtube.com/watch?v=" + videos.id.videoId 
      }

      this.mostWatchedVideosLists.push(videoDetail);
      });
    }

  ngOnInit() {
    // let videosApiUrl = "https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=" + this.userId + "&maxResults=" + this.maxVideosCount + "&key=" + this.api_key
    // this._http.getData(videosApiUrl).subscribe(detail => this.bindVideosinView(detail)); 

    // let mostWatchedVideosApiUrl = "https://www.googleapis.com/youtube/v3/search?order=viewCount&part=snippet&channelId=" + this.userId + "&maxResults=" + 2 + "&key=" + this.api_key
    // this._http.getData(mostWatchedVideosApiUrl).subscribe(detail => this.bindmostwatchedVideosinView(detail)); 
  }
}