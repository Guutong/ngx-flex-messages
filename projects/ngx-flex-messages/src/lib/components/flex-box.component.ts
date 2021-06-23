import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import {
  Action,
  FlexBox,
  FlexButton,
  FlexComponent,
  FlexFiller,
  FlexIcon,
  FlexImage,
  FlexSeparator,
  FlexSpacer,
  FlexSpan,
  FlexText,
} from '../model';
import Utils from '../utils';
@Component({
  selector: '[flex-box]',
  template: `
  <ng-container *ngFor="let item of data?.contents">
    <div *ngIf="item?.type == 'box'" flex-box [data]="getFlexData(item)" (action)="onClickAction($event)"></div>
    <div *ngIf="item?.type == 'image'" flex-image [data]="getFlexData(item)" (action)="onClickAction($event)"></div>
    <div *ngIf="item?.type == 'icon'" flex-icon [data]="getFlexData(item)"></div>
    <div *ngIf="item?.type == 'text'" flex-text [data]="getFlexData(item)"></div>
    <div *ngIf="item?.type == 'button'" flex-button [data]="getFlexData(item)" (action)="onClickAction($event)"></div>
    <div *ngIf="item?.type == 'filler'" flex-filler [data]="getFlexData(item)"></div>
    <div *ngIf="item?.type == 'separator'" flex-separator [data]="getFlexData(item)"></div>
    <div *ngIf="item?.type == 'spacer'" flex-spacer [data]="getFlexData(item)"></div>
  </ng-container>
  `
})
export class FlexBoxComponent {
  @Input('data') data?: FlexBox;
  @Output() action: EventEmitter<Action> = new EventEmitter();
  @HostBinding('style.padding-right') public get _paddingEnd() { return this.paddingEnd; }
  @HostBinding('style.padding-left') public get _paddingStart() { return this.paddingStart; }
  @HostBinding('style.padding-bottom') public get _paddingBottom() { return this.paddingBottom; }
  @HostBinding('style.padding-top') public get _paddingTop() { return this.paddingTop; }
  @HostBinding('style.padding') public get _padding() { return this.padding; }
  @HostBinding('style.left') public get _offsetStart() { return this.offsetStart; }
  @HostBinding('style.right') public get _offsetEnd() { return this.offsetEnd; }
  @HostBinding('style.bottom') public get _offsetBottom() { return this.offsetBottom; }
  @HostBinding('style.top') public get _offsetTop() { return this.offsetTop; }
  @HostBinding('style.border-radius') public get _cornerRadius() { return this.cornerRadius; }
  @HostBinding('style.border-width') public get _borderWidth() { return this.borderWidth; }
  @HostBinding('style.border-color') public get _borderColor() { return this.borderColor; }
  @HostBinding('style.background') public get _background() { return this.background; }
  @HostBinding('style.height') public get _height() { return this.height; }
  @HostBinding('style.width') public get _width() { return this.width; }
  @HostBinding('style.margin-top') public get _marginTop() { return this.marginTop; }
  @HostBinding('style.-webkit-box-flex') public get _webkitBoxFlex() { return this.flex; }
  @HostBinding('style.flex-grow') public get _flex() { return this.flex; }
  @HostBinding('class') public get _classes() { return this.customClass.join(' '); }

  onClickAction(action?: Action) {
    this.action.emit(action);
  }

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
    } else {
      return this.data?.backgroundColor ? this.data?.backgroundColor : null;
    }
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

  getFlexData(
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
    return Utils.getFlexData(data);
  }
}
