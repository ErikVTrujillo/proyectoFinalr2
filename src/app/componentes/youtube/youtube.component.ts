import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { YoutubeService } from 'src/app/services/youtube.service';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent {
  videos: any[] = [];

  constructor(private spinner: NgxSpinnerService, private youTubeService: YoutubeService) { }
  ngOnInit() {
    setTimeout(()=>
  {
  this.spinner.hide()
  },3000)
    
  this.spinner.show()
  setTimeout(() => {
    this.spinner.hide()
  }, 3000)
  
  interface VideoItem {
    items: { title: string; url: string }[];
  }
  
  this.videos = [];
  this.youTubeService
    .getVideosForChanel('UCKn1g1BTcuOqEo2h1ILMxfQ', 6)
    .subscribe(lista => {
      console.log("LISTA YOUTUBE",lista);
      
      (lista as VideoItem).items.forEach(element => {
        this.videos.push(element)
      });
  
      console.log("VIDEOS", this.videos);
  
      // for (let element of lista["items"]) {
      //   this.videos.push(element)
      // }
    });
  }
}
