import { Component, Input } from '@angular/core';
import { FlexIcon } from '../../model';
import Utils from '../../utils';

@Component({
  selector: '[flex-icon]',
  templateUrl: './flex-icon.component.html',
  styleUrls: ['./flex-icon.component.scss'],
})
export class FlexIconComponent {
  @Input('data') data?: FlexIcon;

  constructor() {}

  get iconClass() {
    return Utils.getFlexIconClass(this.data as FlexIcon);
  }

  get marginTop() {
    return this.data?.margin && this.data?.margin.indexOf('px') >= 0
      ? this.data?.margin
      : null;
  }

  get backgroundImage() {
    return this.data?.url ? 'url(' + this.data?.url + ')' : null;
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

  get fontSize() {
    return this.data?.size && this.data?.size.indexOf('px') >= 0
      ? this.data?.size
      : null;
  }

  get width() {
    const ratio = '100';
    if (!this.data?.aspectRatio) {
      return 1;
    } else {
      return Number(ratio[0]) / Number(ratio[1]);
    }
  }
}
