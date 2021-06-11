import { Component, Input } from '@angular/core';
import {
  FlexBox,
  FlexButton,
  FlexComponent,
  FlexFiller,
  FlexIcon,
  FlexImage,
  FlexSeparator,
  FlexSpacer,
  FlexSpan,
  FlexText,
} from '../../model';

@Component({
  selector: '[flex-component]',
  templateUrl: './flex-component.component.html',
  styleUrls: ['./flex-component.component.scss'],
})
export class FlexComponentComponent {
  @Input('data') data?: FlexComponent;

  get flexImage(): FlexImage {
    return this.data as FlexImage;
  }

  get flexBox(): FlexBox {
    return this.data as FlexBox;
  }

  get flexIcon(): FlexIcon {
    return this.data as FlexIcon;
  }

  get flexText(): FlexText {
    return this.data as FlexText;
  }

  get flexButton(): FlexButton {
    return this.data as FlexButton;
  }

  get flexFiller(): FlexFiller {
    return this.data as FlexFiller;
  }

  get flexSpan(): FlexSpan {
    return this.data as FlexSpan;
  }

  get flexSpacer(): FlexSpacer {
    return this.data as FlexSpacer;
  }

  get flexSeparator(): FlexSeparator {
    return this.data as FlexSeparator;
  }
}
