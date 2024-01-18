import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  constructor(){}

  videos = [
    { 
      video: 'iGUpQ6WUTUg',
    },
    { 
      video: 'geaV92U7i8U',
    },
    { 
      video: '9xMWgEZEEow',
    },
    {
      video: 'js1lKmt-Mag',
    },
    { 
      video: 'IIRsj3MT0cg',
    },
    {
      video: '9mceR__pf28',
    },
    {
      video: 'ToQJ1E7N2bk',
    },
    {
      video: 'iCCopH5DG8Q',
    },
    {
      video: 'OH2kBmYe7fY',
    },
  ]

  videos1 = [
    { 
      video1: 'SeA5Q9d9dq0',
    },
    { 
      video1: 'Ecots6lu7Cw',
    },
    { 
      video1: 'McL-3czsqDk',
    },
    {
      video1: 'jRbEDOFg5eo',
    },
    { 
      video1: '2Bmw6xII_6w',
    },
    {
      video1: '4-Kwa7iqRis',
    },
    {
      video1: '8bzOHKLGMUI',
    },
    {
      video1: '9SHaa3L8c1A',
    },
    {
      video1: 'eBy66nYCxBo',
    },
  ]


  videos2 = [
    { 
      video2: 'BxkxlJPB9ng',
    },
    { 
      video2: '8o5QIxMyClA',
    },
    { 
      video2: 'Nfnpq4igYbk',
    },
    {
      video2: 'GjHPPZUgtck',
    },
    { 
      video2: 'UoKHmyeP7g4',
    },
    {
      video2: 'wL3E2e_Uq3c',
    },
    {
      video2: 'x_LQB_EO8EA',
    },
    {
      video2: 'wZW1hzPIKAk',
    },
    {
      video2: 'PAFGn-Lc7js',
    }, 
  ]

  ngOnInit(): void {
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
  }

}
