import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../shared/service/service.service';
import { FirebaseApp } from 'angularfire2';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable  } from 'angularfire2/database'
import * as firebase from 'firebase';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers:[ServiceService]
})
export class DashboardComponent implements OnInit {

  recommendedVideos: FirebaseListObservable<any[]>;
  recommendedVideosList = [];
  image:string;

  constructor(public db: AngularFireDatabase, private _http: ServiceService, private router:Router) { 
  }

  recommendedVideosListBind(list){
    list.forEach(videos => {
      const storageRef = firebase.storage().ref().child(videos.thumbnail);
      let videothumbnail = storageRef.getDownloadURL().then(url => url);
      
      let videoDetail = {
        title : videos.title,
        videothumbnail : videos.thumbnail,
        videoId : "https://www.youtube.com/watch?v=" + videos.videoId 
      }

      this.recommendedVideosList.push(videoDetail);
    });
    debugger;
  };

  ngOnInit() {
    this.db.list('recommendedVideos').map(res => res).subscribe(res => {this.recommendedVideosListBind(res);});
  }
}