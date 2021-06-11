import { Component, Input, OnInit } from '@angular/core';
import { FlexIcon } from '../../model';

@Component({
  selector: '[flex-icon]',
  templateUrl: './flex-icon.component.html',
  styleUrls: ['./flex-icon.component.scss'],
})
export class FlexIconComponent {
  @Input('data') data?: FlexIcon;

  constructor() {}

  get iconClass() {
    const {
      size,
      aspectRatio,
      position,
      margin,
      offsetTop,
      offsetBottom,
      offsetStart,
      offsetEnd,
    }: FlexIcon | any = this.data;
    const customClass = ['MdIco', 'fl0'];

    if (!(size && size.indexOf('px') >= 0)) {
      customClass.push('Ex' + this.upperAllDigit(size || 'md'));
    }
    customClass.push(position === 'absolute' ? 'ExAbs' : '');

    if (!(margin && margin.indexOf('px') >= 0)) {
      customClass.push(margin ? `ExMgnT${this.upperAllDigit(margin)}` : '');
    }
    if (offsetTop && offsetTop.indexOf('px') < 0) {
      customClass.push(offsetTop ? 'ExT' + this.upperAllDigit(offsetTop) : '');
    }
    if (offsetBottom && offsetBottom.indexOf('px') < 0) {
      customClass.push(
        offsetBottom ? 'ExB' + this.upperAllDigit(offsetBottom) : ''
      );
    }
    if (offsetStart && offsetStart.indexOf('px') < 0) {
      customClass.push(
        offsetStart ? 'ExL' + this.upperAllDigit(offsetStart) : ''
      );
    }
    if (offsetEnd && offsetEnd.indexOf('px') < 0) {
      customClass.push(offsetEnd ? 'ExR' + this.upperAllDigit(offsetEnd) : '');
    }

    return customClass;
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

  upperAllDigit(str: string) {
    if (isNaN(Number(str.charAt(0)))) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return str.charAt(0) + str.charAt(1).toUpperCase() + str.slice(2);
  }

  upper1Digit(str: string) {
    return str.charAt(0).toUpperCase();
  }
}
