import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Action, FlexButton } from '../../model';
import Utils from '../../utils';

@Component({
  selector: '[flex-button]',
  templateUrl: './flex-button.component.html',
  styleUrls: ['./flex-button.component.scss'],
})
export class FlexButtonComponent {
  @Input('data') data?: FlexButton;
  @Output() action: EventEmitter<Action> = new EventEmitter();

  onClickAction(action?: Action) {
    this.action.emit(action);
  }

  get buttonClass() {
    return Utils.getFlexButtonClass(this.data as FlexButton);
  }

  get backgroundColor() {
    return this.data?.color ? this.data?.color : null;
  }

  get marginTop() {
    return this.data?.margin && this.data?.margin.indexOf('px') >= 0
      ? this.data?.margin
      : null;
  }

  get offsetTop() {
    return this.data?.offsetTop && this.data?.offsetTop.indexOf('px') >= 0
      ? this.data?.offsetTop
      : null;
  }

  get offsetBottom() {
    return this.data?.offsetBottom && this.data?.offsetBottom.indexOf('px') >= 0
      ? this.data?.offsetBottom
      : null;
  }

  get offsetStart() {
    return this.data?.offsetStart && this.data?.offsetStart.indexOf('px') >= 0
      ? this.data?.offsetStart
      : null;
  }

  get offsetEnd() {
    return this.data?.offsetEnd && this.data?.offsetEnd.indexOf('px') >= 0
      ? this.data?.offsetEnd
      : null;
  }

  get flex() {
    return this.data?.flex && this.data?.flex > 3 ? this.data?.flex : null;
  }
}
