import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Action, FlexBubble, FlexCarousel, FlexContainer } from '../../model';

@Component({
  selector: 'flex-message',
  templateUrl: './flex-message.component.html',
  styleUrls: ['./flex-message.component.scss'],
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
