import { Component, Input } from '@angular/core';
import { FlexSeparator } from '../../model';
import Utils from '../../utils';

@Component({
  selector: '[flex-separator]',
  templateUrl: './flex-separator.component.html',
  styleUrls: ['./flex-separator.component.scss'],
})
export class FlexSeparatorComponent {
  @Input('data') data?: FlexSeparator;

  get separatorClass() {
    return Utils.getFlexSeparatorClass(this.data as FlexSeparator);
  }

  get borderColor() {
    return this.data?.color ? this.data?.color : null;
  }
}
