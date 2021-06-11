import { Component, Input } from '@angular/core';
import { FlexText } from '../../model';

@Component({
  selector: '[flex-text]',
  templateUrl: './flex-text.component.html',
  styleUrls: ['./flex-text.component.scss'],
})
export class FlexTextComponent {
  @Input('data') data?: FlexText;
  constructor() {}

  get textClass() {
    const {
      flex,
      margin,
      size,
      position,
      align,
      gravity,
      weight,
      style,
      decoration,
      wrap,
      offsetTop,
      offsetBottom,
      offsetStart,
      offsetEnd,
    }: FlexText | any = this.data;
    const customClass = ['MdTxt'];
    if (flex >= 0) {
      customClass.push(`fl${flex}`);
    }

    if (!(size && size.indexOf('px') >= 0)) {
      customClass.push('Ex' + this.upperAllDigit(size || 'md'));
    }

    customClass.push(position === 'absolute' ? 'ExAbs' : '');

    if (!(margin && margin.indexOf('px') >= 0)) {
      customClass.push(margin ? `ExMgnL${this.upperAllDigit(margin)}` : '');
    }

    if (align === 'start' || align === 'end' || align === 'center') {
      customClass.push(`ExAlg${this.upper1Digit(align)}`);
    }

    if (gravity === 'bottom' || gravity === 'center') {
      customClass.push(`grv${this.upper1Digit(gravity)}`);
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

    if (weight === 'bold') {
      customClass.push('ExWB');
    }

    if (style) {
      const FntSty: any = {
        normal: 'ExFntStyNml',
        italic: 'ExFntStyIt',
      };
      customClass.push(FntSty[style] || '');
    }

    if (decoration) {
      const ExTxtDec: any = {
        'line-through': 'ExTxtDecLt',
        underline: 'ExTxtDecUl',
        none: 'ExTxtDecNone',
      };
      customClass.push(ExTxtDec[decoration] || '');
    }

    if (wrap) {
      customClass.push('ExWrap');
    }

    return customClass;
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
