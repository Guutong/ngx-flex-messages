import { Component, Input } from '@angular/core';
import { FlexSpacer } from '../../model';
import Utils from '../../utils';

@Component({
  selector: '[flex-spacer]',
  templateUrl: './flex-spacer.component.html',
  styleUrls: ['./flex-spacer.component.scss'],
})
export class FlexSpacerComponent {
  @Input('data') data?: FlexSpacer;

  get spacerClass() {
    return Utils.getFlexSpacerClass(this.data as FlexSpacer);
  }
}
