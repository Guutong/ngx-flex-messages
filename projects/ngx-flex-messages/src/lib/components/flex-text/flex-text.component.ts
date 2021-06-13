import { Component, Input } from '@angular/core';
import { FlexText } from '../../model';
import Utils from '../../utils';

@Component({
  selector: '[flex-text]',
  templateUrl: './flex-text.component.html',
  styleUrls: ['./flex-text.component.scss'],
})
export class FlexTextComponent {
  @Input('data') data?: FlexText;

  get textClass() {
    return Utils.getFlexTextClass(this.data as FlexText);
  }

  get flex() {
    return this.data?.flex && this.data?.flex > 3 ? this.data?.flex : null;
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

  get marginTop() {
    return this.data?.margin && this.data?.margin.indexOf('px') >= 0
      ? this.data?.margin
      : null;
  }

  get color() {
    return this.data?.color ? this.data?.color : null;
  }
}
