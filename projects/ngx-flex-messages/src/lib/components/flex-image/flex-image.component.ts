import { Component, Input } from '@angular/core';
import { Action, FlexImage } from '../../model';

@Component({
  selector: '[flex-image]',
  templateUrl: './flex-image.component.html',
  styleUrls: ['./flex-image.component.scss'],
})
export class FlexImageComponent {
  @Input('data') data?: FlexImage;

  onClick(action?: Action) {
    console.log(action);
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
  get customClass() {
    const {
      aspectMode,
      size,
      position,
      flex,
      margin,
      align,
      gravity,
      offsetTop,
      offsetBottom,
      offsetStart,
      offsetEnd,
    }: FlexImage | any = this.data;
    const customClass = ['MdImg'];

    customClass.push(`Ex${this.upperAllDigit(aspectMode || 'fit')}`);
    customClass.push(flex && flex >= 0 ? `fl${flex}` : '');

    if (size && size.indexOf('px') < 0) {
      customClass.push('Ex' + this.upperAllDigit(size || 'md'));
    }

    customClass.push(position === 'absolute' ? 'ExAbs' : '');
    if (!(margin && margin.indexOf('px') >= 0)) {
      customClass.push(margin ? `ExMgnT${this.upperAllDigit(margin)}` : '');
    }
    customClass.push(
      align === 'start' || align === 'end'
        ? `alg${this.upper1Digit(align)}`
        : ''
    );
    customClass.push(
      gravity === 'bottom' || gravity === 'center'
        ? `grv${this.upper1Digit(gravity)}`
        : ''
    );

    if (offsetTop && offsetTop.indexOf('px') < 0) {
      customClass.push(offsetTop ? `ExT${this.upperAllDigit(offsetTop)}` : '');
    }

    if (offsetBottom && offsetBottom.indexOf('px') < 0) {
      customClass.push(
        offsetBottom ? `ExB${this.upperAllDigit(offsetBottom)}` : ''
      );
    }

    if (offsetStart && offsetStart.indexOf('px') < 0) {
      customClass.push(
        offsetStart ? `ExB${this.upperAllDigit(offsetStart)}` : ''
      );
    }

    if (offsetEnd && offsetEnd.indexOf('px') < 0) {
      customClass.push(offsetEnd ? `ExB${this.upperAllDigit(offsetEnd)}` : '');
    }

    return customClass;
  }

  get flex() {
    return this.data?.flex && this.data?.flex > 3 ? this.data?.flex : null;
  }

  get width() {
    return this.data?.size && this.data?.size.indexOf('px') >= 0
      ? this.data?.size
      : null;
  }

  get backgroundImage() {
    return this.data?.url ? 'url(' + this.data?.url + ')' : null;
  }

  get backgroundColor() {
    return this.data?.backgroundColor
      ? this.data?.backgroundColor + ' !important;'
      : null;
  }

  get paddingBottom() {
    if (this.data?.aspectRatio) {
      const ratio = this.data?.aspectRatio.split(':');
      return (Number(ratio[1]) * 100) / Number(ratio[0]);
    }
    return 100;
  }
}
