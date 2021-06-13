import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Action, FlexCarousel } from '../../model';

@Component({
  selector: '[flex-carousel]',
  templateUrl: './flex-carousel.component.html',
  styleUrls: ['./flex-carousel.component.scss'],
})
export class FlexCarouselComponent {
  @Input('data') data?: FlexCarousel;
  @Output() action: EventEmitter<Action> = new EventEmitter();

  onClickAction(action: Action) {
    this.action.emit(action);
  }
}
