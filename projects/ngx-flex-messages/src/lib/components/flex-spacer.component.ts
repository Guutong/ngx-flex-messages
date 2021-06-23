import { Component, HostBinding, Input } from '@angular/core';
import { FlexSpacer } from '../model';
import Utils from '../utils';

@Component({
  selector: '[flex-spacer]',
  template: ''
})
export class FlexSpacerComponent {
  @Input('data') data?: FlexSpacer;
  @HostBinding('class') public get _classes() { return this.spacerClass.join(' '); }

  get spacerClass() {
    return Utils.getFlexSpacerClass(this.data as FlexSpacer);
  }
}
