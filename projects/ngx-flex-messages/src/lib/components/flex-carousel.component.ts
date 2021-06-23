import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Action, FlexCarousel } from '../model';

@Component({
  selector: '[flex-carousel]',
  template: `<div *ngFor="let item of data?.contents" flex-bubble [data]="item" (action)="onClickAction($event)"></div>`
})
export class FlexCarouselComponent {
  @Input('data') data?: FlexCarousel;
  @Output() action: EventEmitter<Action> = new EventEmitter();

  onClickAction(action: Action) {
    this.action.emit(action);
  }
}
