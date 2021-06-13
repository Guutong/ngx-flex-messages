import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Action, FlexContainer, FlexMessage } from './model';

@Component({
  selector: 'ngx-flex-messages',
  templateUrl: './ngx-flex-messages.component.html',
  styles: []
})
export class NgxFlexMessagesComponent {
  @Input('data') data?: FlexMessage;
  @Output() action: EventEmitter<Action> = new EventEmitter();

  onClickAction(action: Action) {
    console.log(action);
    
    this.action.emit(action);
  }
  
  constructor() { }

  get flexContainer(): FlexContainer {
    return this.data?.contents as FlexContainer;
  }
}
