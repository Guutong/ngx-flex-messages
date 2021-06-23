import { Component, HostBinding, Input } from '@angular/core';
import { FlexIcon } from '../model';
import Utils from '../utils';

@Component({
  selector: '[flex-icon]',
  template: `<div><span [style.width.em]="width" [style.background-image]="backgroundImage"></span></div>`,
})
export class FlexIconComponent {
  @Input('data') data?: FlexIcon;
  @HostBinding('style.margin-top') public get _marginTop() { return this.marginTop; }
  @HostBinding('style.left') public get _offsetStart() { return this.offsetStart; }
  @HostBinding('style.right') public get _offsetEnd() { return this.offsetEnd; }
  @HostBinding('style.bottom') public get _offsetBottom() { return this.offsetBottom; }
  @HostBinding('style.top') public get _offsetTop() { return this.offsetTop; }
  @HostBinding('style.font-size') public get _fontSiz() { return this.fontSize; }
  @HostBinding('class') public get _classes() { return this.iconClass.join(' '); }

  get iconClass() {
    return Utils.getFlexIconClass(this.data as FlexIcon);
  }

  get marginTop() {
    return this.data?.margin && this.data?.margin.indexOf('px') >= 0
      ? this.data?.margin
      : null;
  }

  get backgroundImage() {
    return this.data?.url ? 'url(' + this.data?.url + ')' : null;
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

  get fontSize() {
    return this.data?.size && this.data?.size.indexOf('px') >= 0
      ? this.data?.size
      : null;
  }

  get width() {
    const ratio = '100';
    if (!this.data?.aspectRatio) {
      return 1;
    } else {
      return Number(ratio[0]) / Number(ratio[1]);
    }
  }
}
