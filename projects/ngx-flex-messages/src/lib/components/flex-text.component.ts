import { Component, HostBinding, Input } from '@angular/core';
import { FlexText } from '../model';
import Utils from '../utils';

@Component({
  selector: '[flex-text]',
  template: `
  <p>
    {{ data?.text }}
    <ng-container *ngFor="let item of data?.contents">
      <span flex-span [data]="item"></span>
    </ng-container>
  </p>
  `
})
export class FlexTextComponent {
  @Input('data') data?: FlexText;
  @HostBinding('style.color') public get _color() { return this.color; }
  @HostBinding('style.left') public get _offsetStart() { return this.offsetStart; }
  @HostBinding('style.right') public get _offsetEnd() { return this.offsetEnd; }
  @HostBinding('style.bottom') public get _offsetBottom() { return this.offsetBottom; }
  @HostBinding('style.top') public get _offsetTop() { return this.offsetTop; }
  @HostBinding('style.margin-top') public get _marginTop() { return this.marginTop; }
  @HostBinding('style.-webkit-box-flex') public get _webkitBoxFlex() { return this.flex; }
  @HostBinding('style.flex-grow') public get _flex() { return this.flex; }
  @HostBinding('class') public get _classes() { return this.textClass.join(' '); }
  
  get textClass() {
    return Utils.getFlexTextClass(this.data as FlexText);
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
}
