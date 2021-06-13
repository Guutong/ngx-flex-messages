import { Component, Input } from '@angular/core';
import { FlexBox, FlexButton, FlexComponent, FlexFiller, FlexIcon, FlexImage, FlexSeparator, FlexSpacer, FlexSpan, FlexText } from '../../model';
import Utils from '../../utils'
@Component({
  selector: '[flex-box]',
  templateUrl: './flex-box.component.html',
  styleUrls: ['./flex-box.component.scss'],
})
export class FlexBoxComponent {
  @Input('data') data?: FlexBox;

  get customClass(): string[] {
    return Utils.getFlexBoxClass(this.data as FlexBox);
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
    return Utils.getFlexData(data);
  }

}
