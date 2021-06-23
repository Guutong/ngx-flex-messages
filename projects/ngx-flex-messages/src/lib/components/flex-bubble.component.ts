import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { Action, FlexBox, FlexBubble, FlexImage } from '../model';
import Utils from '../utils';

@Component({
  selector: '[flex-bubble]',
  template: `
    <div [ngClass]="customDirectionClass" dir="{{ data?.direction }}">
      <div class="t1Hero">
        <div
          *ngIf="data?.hero?.type == 'box'"
          flex-box
          [data]="getFlexContent(data?.hero)"
          (action)="onClickAction($event)"
        ></div>
        <div
          *ngIf="data?.hero?.type == 'image'"
          flex-image
          [data]="getFlexContent(data?.hero)"
          (action)="onClickAction($event)"
        ></div>
      </div>
      <div class="t1Header">
        <div
          *ngIf="data?.header?.type == 'box'"
          flex-box
          [data]="getFlexContent(data?.header)"
          (action)="onClickAction($event)"
        ></div>
      </div>
      <div class="t1Body ExHasFooter">
        <div
          *ngIf="data?.body?.type == 'box'"
          flex-box
          [data]="getFlexContent(data?.body)"
          (action)="onClickAction($event)"
        ></div>
      </div>
      <div class="t1Footer">
        <div
          *ngIf="data?.footer?.type == 'box'"
          flex-box
          [data]="getFlexContent(data?.footer)"
          (action)="onClickAction($event)"
        ></div>
      </div>
    </div>
  `
})
export class FlexBubbleComponent {
  @Input('data') data?: FlexBubble;
  @Output() action: EventEmitter<Action> = new EventEmitter();
  @HostBinding('class') public get _classes() { return this.customBubbleClass.join(' '); }

  onClickAction(action?: Action) {
    this.action.emit(action);
  }

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
