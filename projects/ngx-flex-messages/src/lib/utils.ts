import {
  FlexComponent,
  FlexBox,
  FlexButton,
  FlexImage,
  FlexIcon,
  FlexText,
  FlexSpan,
  FlexSeparator,
  FlexFiller,
  FlexSpacer,
  FlexBubble,
} from './model';

export default class Utils {
  static upperAllDigit(str: string) {
    if (isNaN(Number(str.charAt(0)))) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return (
      str.charAt(0).toUpperCase() + str.charAt(1).toUpperCase() + str.slice(2)
    );
  }

  static upper1Digit(str: string) {
    return str.charAt(0).toUpperCase();
  }

  static upperToDigit(str: string) {
    return str.charAt(0).toUpperCase() + str.substring(1, 2);
  }

  static getFlexBoxClass(data: FlexBox) {
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
    }: FlexBox | any = data;

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
        none: 'ExMgnTNone',
        xs: 'ExMgnTXs',
        sm: 'ExMgnTSm',
        md: 'ExMgnTMd',
        lg: 'ExMgnTLg',
        xl: 'ExMgnTXl',
        xxl: 'ExMgnTXxl',
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

  static getFlexBubbleClass(data: FlexBubble) {
    const customClass = ['lyItem'];
    customClass.push(`Ly${this.upperToDigit(data?.size || 'medium')}`);
    return customClass;
  }

  static getFlexButtonClass(data: FlexButton) {
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
    }: FlexButton | any = data;

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

  static getFlexFillerClass(data: FlexFiller) {
    const { flex }: FlexFiller | any = data;
    const customClass = ['mdBxFiller'];
    if (flex >= 0 && flex <= 3) {
      customClass.push(`fl${flex}`);
    }

    return customClass;
  }

  static getFlexIconClass(data: FlexIcon) {
    const {
      size,
      aspectRatio,
      position,
      margin,
      offsetTop,
      offsetBottom,
      offsetStart,
      offsetEnd,
    }: FlexIcon | any = data;
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

  static getFlexImageClass(data: FlexImage) {
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
    }: FlexImage | any = data;
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

  static getFlexSeparatorClass(data: FlexSeparator) {
    const customClass = ['fl0', 'MdSep'];
    const { margin }: FlexSeparator | any = data;
    if (!(margin && margin.indexOf('px') >= 0)) {
      customClass.push(margin ? `ExMgnT${this.upperAllDigit(margin)}` : '');
    }
    return customClass;
  }

  static getFlexSpacerClass(data: FlexSpacer) {
    const customClass = ['mdBxSpacer', 'fl0'];
    const { size }: FlexSpacer | any = data;
    if (size && size.indexOf('px') < 0) {
      customClass.push('spc' + this.upperAllDigit(size || 'md'));
    }
    return customClass;
  }

  static getFlexSpanClass(data: FlexSpan) {
    const { size, color, weight, style, decoration }: FlexSpan | any = data;
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

  static getFlexTextClass(data: FlexText) {
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
    }: FlexText | any = data;
    const customClass = ['MdTxt'];
    if (flex >= 0) {
      customClass.push(`fl${flex}`);
    }

    if (!(size && size.indexOf('px') >= 0)) {
      customClass.push('Ex' + this.upperAllDigit(size || 'md'));
    }

    customClass.push(position === 'absolute' ? 'ExAbs' : '');

    if (!(margin && margin.indexOf('px') >= 0)) {
      customClass.push(margin ? `ExMgnT${this.upperAllDigit(margin)}` : '');
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

  static getFlexData(
    data: FlexComponent
  ):
    | FlexBox
    | FlexButton
    | FlexImage
    | FlexIcon
    | FlexText
    | FlexSpan
    | FlexSeparator
    | FlexFiller
    | FlexSpacer
    | any {
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
}
