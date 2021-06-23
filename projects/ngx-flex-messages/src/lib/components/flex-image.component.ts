import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { FlexImage, Action } from '../model';
import Utils from '../utils';

@Component({
  selector: '[flex-image]',
  template: `
  <div [style.width]="width">
    <a
      (click)="onClickAction(data?.action)"
      [style.padding-bottom.%]="paddingBottom"
    >
      <span
        [style.background-image]="backgroundImage"
        [style.background-color]="backgroundColor"
      ></span>
    </a>
  </div>
  `
})
export class FlexImageComponent {
  @Input('data') data?: FlexImage;
  @Output() action: EventEmitter<Action> = new EventEmitter();
  @HostBinding('style.-webkit-box-flex') public get _webkitBoxFlex() { return this.flex; }
  @HostBinding('style.flex-grow') public get _flex() { return this.flex; }
  @HostBinding('class') public get _classes() { return this.customClass.join(' '); }
  
  onClickAction(action?: Action) {
    this.action.emit(action);
  }

  get customClass() {
    return Utils.getFlexImageClass(this.data as FlexImage);
  }

  get flex() {
    return this.data?.flex && this.data?.flex > 3 ? this.data?.flex : null;
  }

  get width() {
    return this.data?.size && this.data?.size.indexOf('px') >= 0
      ? this.data?.size
      : null;
  }

  get backgroundImage() {
    return this.data?.url ? 'url(' + this.data?.url + ')' : null;
  }

  get backgroundColor() {
    return this.data?.backgroundColor
      ? this.data?.backgroundColor + ' !important;'
      : null;
  }

  get paddingBottom() {
    if (this.data?.aspectRatio) {
      const ratio = this.data?.aspectRatio.split(':');
      return (Number(ratio[1]) * 100) / Number(ratio[0]);
    }
    return 100;
  }
}
