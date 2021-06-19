import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxFlexMessagesComponent } from './ngx-flex-messages.component';
import { FlexMessageComponent } from './components/flex-message/flex-message.component';
import { FlexBubbleComponent } from './components/flex-bubble/flex-bubble.component';
import { FlexBoxComponent } from './components/flex-box/flex-box.component';
import { FlexImageComponent } from './components/flex-image/flex-image.component';
import { FlexButtonComponent } from './components/flex-button/flex-button.component';
import { FlexCarouselComponent } from './components/flex-carousel/flex-carousel.component';
import { FlexFillerComponent } from './components/flex-filler/flex-filler.component';
import { FlexIconComponent } from './components/flex-icon/flex-icon.component';
import { FlexSeparatorComponent } from './components/flex-separator/flex-separator.component';
import { FlexSpacerComponent } from './components/flex-spacer/flex-spacer.component';
import { FlexSpanComponent } from './components/flex-span/flex-span.component';
import { FlexTextComponent } from './components/flex-text/flex-text.component';
import { RemoveHostDirective } from './directives/remove-host.directive';

@NgModule({
  declarations: [
    NgxFlexMessagesComponent,
    FlexMessageComponent,
    FlexBoxComponent,
    FlexBubbleComponent,
    FlexImageComponent,
    FlexIconComponent,
    FlexTextComponent,
    FlexButtonComponent,
    FlexFillerComponent,
    FlexSpanComponent,
    FlexSpacerComponent,
    FlexSeparatorComponent,
    FlexCarouselComponent,
    RemoveHostDirective,
  ],
  imports: [CommonModule],
  exports: [
    NgxFlexMessagesComponent,
    FlexMessageComponent,
    FlexBoxComponent,
    FlexBubbleComponent,
    FlexImageComponent,
    FlexIconComponent,
    FlexTextComponent,
    FlexButtonComponent,
    FlexFillerComponent,
    FlexSpanComponent,
    FlexSpacerComponent,
    FlexSeparatorComponent,
    FlexCarouselComponent,
    RemoveHostDirective,
  ],
})
export class NgxFlexMessagesModule {}