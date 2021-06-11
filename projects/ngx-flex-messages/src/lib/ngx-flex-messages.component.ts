import { Component, Input } from '@angular/core';
import { FlexContainer, FlexMessage } from './model';

@Component({
  selector: 'ngx-flex-messages',
  templateUrl: './ngx-flex-messages.component.html',
  styles: []
})
export class NgxFlexMessagesComponent {
  @Input('data') data?: FlexMessage;
  
  constructor() { }

  get flexContainer(): FlexContainer {
    return this.data?.contents as FlexContainer;
  }
}
