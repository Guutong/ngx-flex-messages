import { Component, HostBinding, Input } from '@angular/core';
import { FlexFiller } from '../model';
import Utils from '../utils';

@Component({
  selector: '[flex-filler]',
  template: ''
})
export class FlexFillerComponent {
  @Input('data') data?: FlexFiller;
  @HostBinding('style.-webkit-box-flex') public get _webkitBoxFlex() { return this.flex; }
  @HostBinding('style.flex-grow') public get _flex() { return this.flex; }
  @HostBinding('class') public get _classes() { return this.fillerClass.join(' '); }

  get fillerClass() {
    return Utils.getFlexFillerClass(this.data as FlexFiller);
  }

  get flex() {
    return this.data?.flex && this.data?.flex > 3 ? this.data?.flex : null;
  }
}
