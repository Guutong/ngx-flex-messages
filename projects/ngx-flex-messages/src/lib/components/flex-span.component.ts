import { Component, HostBinding, Input } from '@angular/core';
import { FlexSpan } from '../model';
import Utils from '../utils';

@Component({
  selector: '[flex-span]',
  template: `{{ data?.text }}`,
})
export class FlexSpanComponent {
  @Input('data') data?: FlexSpan;
  @HostBinding('style.color') public get _color() { return this.color; }
  @HostBinding('style.font-size') public get _fontSize() { return this.fontSize; }
  @HostBinding('class') public get _classes() { return this.spanClass.join(' '); }

  get spanClass() {
    return Utils.getFlexSpanClass(this.data as FlexSpan);
  }

  get color() {
    return this.data?.color ? this.data?.color : null;
  }

  get fontSize() {
    return this.data?.size && this.data?.size.indexOf('px') >= 0
      ? this.data?.size
      : null;
  }
}
