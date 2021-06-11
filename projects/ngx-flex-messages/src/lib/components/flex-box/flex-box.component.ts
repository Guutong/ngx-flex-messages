import { Component, Input, OnInit } from '@angular/core';
import { FlexBox, FlexButton, FlexComponent, FlexFiller, FlexIcon, FlexImage, FlexSeparator, FlexSpacer, FlexSpan, FlexText } from '../../model';

@Component({
  selector: '[flex-box]',
  templateUrl: './flex-box.component.html',
  styleUrls: ['./flex-box.component.scss'],
})
export class FlexBoxComponent implements OnInit {
  @Input('data') data?: FlexBox;
  constructor() {}

  ngOnInit(): void {}

  get customClass(): string[] {
    const customClass = ['MdBx'];
    let {
      layout,
      position,
      flex,
      spacing,
      margin,
      borderWidth,
      cornerRadius,
      justifyContent,
      alignItems,
      offsetTop,
      offsetBottom,
      offsetStart,
      offsetEnd,
      paddingAll,
      paddingTop,
      paddingBottom,
      paddingStart,
      paddingEnd,
    }: FlexBox | any = this.data;

    if (layout === 'baseline') {
      customClass.push('hr');
      customClass.push('bl');
    }
    if (layout === 'horizontal') {
      customClass.push('hr');
    }
    if (layout === 'vertical') {
      customClass.push('vr');
    }

    if (flex <= 3) {
      customClass.push(flex >= 0 ? `fl${flex}` : '');
    }

    customClass.push(position === 'absolute' ? 'ExAbs' : '');

    if (spacing && spacing.indexOf('px') < 0) {
      customClass.push(spacing ? 'spc' + this.upperAllDigit(spacing) : '');
    }

    if (margin && margin.indexOf('px') < 0) {
      const ExMgnT: any = {
        'none': 'ExMgnTNone',
        'xs': 'ExMgnTXs',
        'sm': 'ExMgnTSm',
        'md': 'ExMgnTMd',
        'lg': 'ExMgnTLg',
        'xl': 'ExMgnTXl',
        'xxl': 'ExMgnTXXl',
      };
      customClass.push(ExMgnT[margin] || '');
    }

    if (borderWidth && borderWidth.indexOf('px') < 0) {
      const ExBdr: any = {
        none: 'ExBdrWdtNone',
        light: 'ExBdrWdtLgh',
        normal: 'ExBdrWdtNml',
        medium: 'ExBdrWdtMdm',
        'semi-bold': 'ExBdrWdtSbd',
        bold: 'ExBdrWdtBld',
      };
      customClass.push(ExBdr[borderWidth] || '');
    }

    if (cornerRadius && cornerRadius.indexOf('px') < 0) {
      customClass.push(
        cornerRadius ? 'ExBdrRad' + this.upperAllDigit(cornerRadius) : ''
      );
    }
    if (justifyContent) {
      const jfc: any = {
        center: 'itms-jfcC',
        'flex-start': 'itms-jfcS',
        'flex-end': 'itms-jfcE',
        'space-between': 'itms-jfcSB',
        'space-around': 'itms-jfcSA',
        'space-evenly': 'itms-jfcSE',
      };
      customClass.push(jfc[justifyContent] || '');
    }

    if (alignItems) {
      const alg: any = {
        center: 'itms-algC',
        'flex-start': 'itms-algS',
        'flex-end': 'itms-algE',
      };
      customClass.push(alg[alignItems] || '');
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

    if (paddingAll && paddingAll.indexOf('px') < 0) {
      customClass.push(
        paddingAll ? 'ExPadA' + this.upperAllDigit(paddingAll) : ''
      );
    }

    if (paddingTop && paddingTop.indexOf('px') < 0) {
      customClass.push(
        paddingTop ? 'ExPadT' + this.upperAllDigit(paddingTop) : ''
      );
    }

    if (paddingBottom && paddingBottom.indexOf('px') < 0) {
      customClass.push(
        paddingBottom ? 'ExPadB' + this.upperAllDigit(paddingBottom) : ''
      );
    }

    if (paddingStart && paddingStart.indexOf('px') < 0) {
      customClass.push(
        paddingStart ? 'ExPadL' + this.upperAllDigit(paddingStart) : ''
      );
    }

    if (paddingEnd && paddingEnd.indexOf('px') < 0) {
      customClass.push(
        paddingEnd ? 'ExPadR' + this.upperAllDigit(paddingEnd) : ''
      );
    }

    return customClass;
  }

  get background() {
    const { background }: any = this.data;
    if (background && background.type === 'linearGradient') {
      const centerPosition = background.centerPosition
        ? background.centerPosition
        : '50%';
      if (background.centerColor) {
        return `linear-gradient(${background.angle}, ${background.startColor} 0%, ${background.centerColor} ${centerPosition}, ${background.endColor} 100%);`;
      } else {
        return `linear-gradient(${background.angle}, ${background.startColor} 0%, ${background.endColor} 100%);`;
      }
    }
    return null;
  }
  get padding() {
    return this.data?.paddingAll && this.data?.paddingAll.indexOf('px') >= 0
      ? this.data?.paddingAll
      : null;
  }
  get paddingTop() {
    return this.data?.paddingTop && this.data?.paddingTop.indexOf('px') >= 0
      ? this.data?.paddingTop
      : null;
  }
  get paddingBottom() {
    return this.data?.paddingBottom &&
      this.data?.paddingBottom.indexOf('px') >= 0
      ? this.data?.paddingBottom
      : null;
  }
  get paddingStart() {
    return this.data?.paddingStart && this.data?.paddingStart.indexOf('px') >= 0
      ? this.data?.paddingStart
      : null;
  }
  get paddingEnd() {
    return this.data?.paddingEnd && this.data?.paddingEnd.indexOf('px') >= 0
      ? this.data?.paddingEnd
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

  get width() {
    return this.data?.width ? this.data?.width : null;
  }

  get height() {
    return this.data?.height ? this.data?.height : null;
  }

  get backgroundColor() {
    return this.data?.backgroundColor ? this.data?.backgroundColor : null;
  }

  get borderColor() {
    return this.data?.borderColor ? this.data?.borderColor : null;
  }

  get borderWidth() {
    return this.data?.borderWidth && this.data?.borderWidth.indexOf('px') >= 0
      ? this.data?.borderWidth
      : null;
  }

  get cornerRadius() {
    return this.data?.cornerRadius && this.data?.cornerRadius.indexOf('px') >= 0
      ? this.data?.cornerRadius
      : null;
  }

  get marginTop() {
    return this.data?.margin && this.data?.margin.indexOf('px') >= 0
      ? this.data?.margin
      : null;
  }

  get flex() {
    return this.data?.flex && this.data?.flex > 3 ? this.data?.flex : null;
  }

  getFlexData(data: FlexComponent): FlexBox
    | FlexButton
    | FlexImage
    | FlexIcon
    | FlexText
    | FlexSpan
    | FlexSeparator
    | FlexFiller
    | FlexSpacer | any {
    switch (data.type) {
      case 'box':
        return data as FlexBox;
      case 'button':
        return data as FlexButton;
      case 'image':
        return data as FlexImage;
      case 'icon':
        return data as FlexIcon;
      case 'span':
        return data as FlexSpan;
      case 'separator':
        return data as FlexSeparator;
      case 'filler':
        return data as FlexFiller;
      case 'spacer':
        return data as FlexSpacer;
      case 'text':
        return data as FlexText;
    }
  }
  
  upperAllDigit(str: string) {
    if (isNaN(Number(str.charAt(0)))) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return str.charAt(0).toUpperCase() + str.charAt(1).toUpperCase() + str.slice(2);
  }

  upper1Digit(str: string) {
    return str.charAt(0).toUpperCase();
  }
}
