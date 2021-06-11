import { Component, Input } from '@angular/core';
import { FlexBox, FlexBubble, FlexButton, FlexComponent, FlexFiller, FlexIcon, FlexImage, FlexSeparator, FlexSpacer, FlexSpan, FlexText } from '../../model';

@Component({
  selector: '[flex-bubble]',
  templateUrl: './flex-bubble.component.html',
  styleUrls: ['./flex-bubble.component.scss'],
})
export class FlexBubbleComponent {
  @Input('data') data?: FlexBubble;

  constructor() {}

  get flexData() {
    const { header, hero, body, footer } = this.data as FlexBubble;
    let data: any = { header, hero, body, footer };
    Object.keys(data).forEach((key) => {
      if (!data[key]) {
        delete data[key];
      }
    });
    return data;
  }

  getFlexData(key: string) {
    return this.flexData[key];
  }

  get customBubbleClass() {
    const customClass = ['lyItem'];
    customClass.push(`Ly${this.upperToDigit(this.data?.size || 'medium')}`);
    return customClass;
  }

  get customDirectionClass() {
    const customClass = ['T1'];
    customClass.push(`fx${(this.data?.direction || 'ltr').toUpperCase()}`);
    return customClass;
  }

  upperToDigit(str: string) {
    return str.charAt(0).toUpperCase() + str.substring(1, 2);
  }

  getFlexContent(data: FlexBox | FlexImage | any): FlexBox | FlexImage | any {
    switch (data.type) {
      case 'box':
        return data as FlexBox;
      case 'image':
        return data as FlexImage;
    }
  }

}
