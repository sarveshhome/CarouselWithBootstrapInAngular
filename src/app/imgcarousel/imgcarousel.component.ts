import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imgcarousel',
  templateUrl: './imgcarousel.component.html',
  styleUrls: ['./imgcarousel.component.css']
})
export class ImgcarouselComponent implements OnInit {
  images;
  constructor() {}

  ngOnInit() {
    this.images = [944, 1011, 984].map(
      n => `https://picsum.photos/id/${n}/900/500`
    );
  }
}
