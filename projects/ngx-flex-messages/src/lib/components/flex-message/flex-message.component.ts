import { Component, Input } from '@angular/core';
import { FlexBubble, FlexCarousel, FlexContainer } from '../../model';

@Component({
  selector: 'flex-message',
  templateUrl: './flex-message.component.html',
  styleUrls: ['./flex-message.component.scss'],
})
export class FlexMessageComponent {
  @Input() data?: FlexContainer;

  get flexCarousel(): FlexCarousel {
    return this.data as FlexCarousel;
  }

  get flexBubble(): FlexBubble {
    return this.data as FlexBubble;
  }
}
