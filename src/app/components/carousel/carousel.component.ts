import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styles: []
})

export class CarouselComponent implements OnInit {
  @Input() title: string;
  @Input() movies: any[];

  idCarousel: string;
  hrefIndicators: string;

  constructor() {}

  ngOnInit() {
    this.idCarousel = `carouselExampleIndicators_${this.title}`;
    this.hrefIndicators = `#${this.idCarousel}`;
  }
}
