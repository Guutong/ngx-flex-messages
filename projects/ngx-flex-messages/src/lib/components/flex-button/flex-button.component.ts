import { Component, Input } from '@angular/core';
import { FlexButton } from '../../model';

@Component({
  selector: '[flex-button]',
  templateUrl: './flex-button.component.html',
  styleUrls: ['./flex-button.component.scss'],
})
export class FlexButtonComponent {
  @Input('data') data?: FlexButton;

  constructor() {}

  get buttonClass() {
    const customClass = ['MdBtn'];
    let {
      flex,
      margin,
      position,
      height,
      style,
      gravity,
      offsetTop,
      offsetBottom,
      offsetStart,
      offsetEnd,
    }: FlexButton | any = this.data;

    if (flex <= 3) {
      customClass.push(flex >= 0 ? `fl${flex}` : '');
    }

    customClass.push(position === 'absolute' ? 'ExAbs' : '');

    customClass.push(
      gravity === 'bottom' || gravity === 'center'
        ? `grv${this.upper1Digit(gravity)}`
        : ''
    );

    if (margin && margin.indexOf('px') < 0) {
      customClass.push(margin ? 'ExMgnT' + this.upperAllDigit(margin) : '');
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

    const FntSty: any = {
      link: 'ExBtnL',
      primary: 'ExBtn1',
      secondary: 'ExBtn2',
    };
    customClass.push(FntSty[style] || 'ExBtnL');

    customClass.push(
      !height || height === 'md' ? '' : 'Ex' + this.upperAllDigit(height)
    );

    return customClass;
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
