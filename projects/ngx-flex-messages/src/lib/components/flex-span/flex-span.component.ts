import { Component, Input } from '@angular/core';
import { FlexSpan } from '../../model';
import Utils from '../../utils';

@Component({
  selector: '[flex-span]',
  templateUrl: './flex-span.component.html',
  styleUrls: ['./flex-span.component.scss'],
})
export class FlexSpanComponent {
  @Input('data') data?: FlexSpan;

  get spanClass() {
    return Utils.getFlexSpanClass(this.data as FlexSpan);
  }

  get color() {
    return this.data?.color ? this.data?.color : null;
  }

  get fontSize() {
    return this.data?.size && this.data?.size.indexOf('px') >= 0
      ? this.data?.size
      : null;
  }
}
