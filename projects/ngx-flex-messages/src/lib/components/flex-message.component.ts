import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Action, FlexBubble, FlexCarousel, FlexContainer } from '../model';

@Component({
  selector: 'flex-message',
  template: `
  <div class="LySlider">
    <div
      class="lyInner"
      *ngIf="data?.type === 'carousel'"
      flex-carousel
      [data]="flexCarousel"
      (action)="onClickAction($event)"
    ></div>
    <div
      class="lyInner"
      *ngIf="data?.type === 'bubble'"
      flex-bubble
      [data]="flexBubble"
      (action)="onClickAction($event)"
    ></div>
  </div>
  `,
})
export class FlexMessageComponent {
  @Input() data?: FlexContainer;
  @Output() action: EventEmitter<Action> = new EventEmitter();

  onClickAction(action: Action) {
    this.action.emit(action);
  }

  get flexCarousel(): FlexCarousel {
    return this.data as FlexCarousel;
  }

  get flexBubble(): FlexBubble {
    return this.data as FlexBubble;
  }
}
