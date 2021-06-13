import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Action, FlexImage } from '../../model';
import Utils from '../../utils';

@Component({
  selector: '[flex-image]',
  templateUrl: './flex-image.component.html',
  styleUrls: ['./flex-image.component.scss'],
})
export class FlexImageComponent {
  @Input('data') data?: FlexImage;
  @Output() action: EventEmitter<Action> = new EventEmitter();
  
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
