import { Component, Input } from '@angular/core';
import { FlexFiller } from '../../model';
import Utils from '../../utils';

@Component({
  selector: '[flex-filler]',
  templateUrl: './flex-filler.component.html',
  styleUrls: ['./flex-filler.component.scss'],
})
export class FlexFillerComponent {
  @Input('data') data?: FlexFiller;

  get fillerClass() {
    return Utils.getFlexFillerClass(this.data as FlexFiller);
  }

  get flex() {
    return this.data?.flex && this.data?.flex > 3 ? this.data?.flex : null;
  }
}
