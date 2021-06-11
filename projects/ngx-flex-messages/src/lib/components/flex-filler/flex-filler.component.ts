import { Component, Input } from '@angular/core';
import { FlexFiller } from '../../model';

@Component({
  selector: '[flex-filler]',
  templateUrl: './flex-filler.component.html',
  styleUrls: ['./flex-filler.component.scss'],
})
export class FlexFillerComponent {
  @Input('data') data?: FlexFiller;

  constructor() {}

  get fillerClass() {
    const { flex }: FlexFiller | any = this.data;
    const customClass = ['mdBxFiller'];
    if (flex >= 0 && flex <= 3) {
      customClass.push(`fl${flex}`);
    }

    return customClass;
  }

  get flex() {
    return this.data?.flex && this.data?.flex > 3 ? this.data?.flex : null;
  }
}
