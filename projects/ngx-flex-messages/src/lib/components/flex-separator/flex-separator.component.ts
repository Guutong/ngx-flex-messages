import { Component, Input } from '@angular/core';
import { FlexSeparator } from '../../model';

@Component({
  selector: '[flex-separator]',
  templateUrl: './flex-separator.component.html',
  styleUrls: ['./flex-separator.component.scss'],
})
export class FlexSeparatorComponent {
  @Input('data') data?: FlexSeparator;

  constructor() {}

  upperAllDigit(str: string) {
    if (isNaN(Number(str.charAt(0)))) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return str.charAt(0) + str.charAt(1).toUpperCase() + str.slice(2);
  }

  get separatorClass() {
    const customClass = ['fl0', 'MdSep'];
    const { margin }: FlexSeparator | any = this.data;
    if (!(margin && margin.indexOf('px') >= 0)) {
      customClass.push(margin ? `ExMgnT${this.upperAllDigit(margin)}` : '');
    }
    return customClass;
  }

  get borderColor() {
    return this.data?.color ? this.data?.color : null;
  }
}
