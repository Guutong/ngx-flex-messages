import { Component, Input } from '@angular/core';
import { FlexCarousel } from '../../model';

@Component({
  selector: '[flex-carousel]',
  templateUrl: './flex-carousel.component.html',
  styleUrls: ['./flex-carousel.component.scss'],
})
export class FlexCarouselComponent {
  @Input('data') data?: FlexCarousel;
}
