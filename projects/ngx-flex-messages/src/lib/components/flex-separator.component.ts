import { Component, HostBinding, Input } from '@angular/core';
import { FlexSeparator } from '../model';
import Utils from '../utils';

@Component({
  selector: '[flex-separator]',
  template: ''
})
export class FlexSeparatorComponent {
  @Input('data') data?: FlexSeparator;
  @HostBinding('style.border-color') public get _borderColor() { return this.borderColor; }
  @HostBinding('class') public get _classes() { return this.separatorClass.join(' '); }

  get separatorClass() {
    return Utils.getFlexSeparatorClass(this.data as FlexSeparator);
  }

  get borderColor() {
    return this.data?.color ? this.data?.color : null;
  }
}
