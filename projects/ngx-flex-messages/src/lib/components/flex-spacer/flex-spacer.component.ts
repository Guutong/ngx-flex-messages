import { Component, Input, OnInit } from '@angular/core';
import { FlexSpacer } from '../../model';

@Component({
  selector: '[flex-spacer]',
  templateUrl: './flex-spacer.component.html',
  styleUrls: ['./flex-spacer.component.scss'],
})
export class FlexSpacerComponent {
  @Input('data') data?: FlexSpacer;

  constructor() {}

  get spacerClass() {
    const customClass = ['mdBxSpacer', 'fl0'];
    const { size }: FlexSpacer | any = this.data;
    if (size && size.indexOf('px') < 0) {
      customClass.push('spc' + this.upperAllDigit(size || 'md'));
    }
    return customClass;
  }

  upperAllDigit(str: string) {
    if (isNaN(Number(str.charAt(0)))) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return (
      str.charAt(0).toUpperCase() + str.charAt(1).toUpperCase() + str.slice(2)
    );
  }
}
