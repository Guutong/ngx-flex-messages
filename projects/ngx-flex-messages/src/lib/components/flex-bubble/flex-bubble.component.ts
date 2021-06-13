import { Component, Input } from '@angular/core';
import { FlexBox, FlexBubble, FlexImage } from '../../model';
import Utils from '../../utils';

@Component({
  selector: '[flex-bubble]',
  templateUrl: './flex-bubble.component.html',
  styleUrls: ['./flex-bubble.component.scss'],
})
export class FlexBubbleComponent {
  @Input('data') data?: FlexBubble;

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
    return Utils.getFlexBubbleClass(this.data as FlexBubble);
  }

  get customDirectionClass() {
    const customClass = ['T1'];
    customClass.push(`fx${(this.data?.direction || 'ltr').toUpperCase()}`);
    return customClass;
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
