import { Component, Input, OnInit } from '@angular/core';
import { FlexSpan } from '../../model';

@Component({
  selector: '[flex-span]',
  templateUrl: './flex-span.component.html',
  styleUrls: ['./flex-span.component.scss'],
})
export class FlexSpanComponent {
  @Input('data') data?: FlexSpan;
  constructor() {}

  get spanClass() {
    const { size, color, weight, style, decoration }: FlexSpan | any =
      this.data;
    const customClass = ['MdSpn'];

    if (size && size.indexOf('px') < 0) {
      customClass.push('Ex' + this.upperAllDigit(size || 'md'));
    }

    customClass.push(weight === 'bold' ? 'ExWB' : '');

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

    return customClass;
  }

  get color() {
    return this.data?.color ? this.data?.color : null;
  }
  get fontSize() {
    return this.data?.size && this.data?.size.indexOf('px') >= 0
      ? this.data?.size
      : null;
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
