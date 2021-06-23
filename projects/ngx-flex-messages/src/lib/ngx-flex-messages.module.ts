import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxFlexMessagesComponent } from './ngx-flex-messages.component';
import { FlexMessageComponent } from './components/flex-message.component';
import { FlexBubbleComponent } from './components/flex-bubble.component';
import { FlexBoxComponent } from './components/flex-box.component';
import { FlexImageComponent } from './components/flex-image.component';
import { FlexButtonComponent } from './components/flex-button.component';
import { FlexCarouselComponent } from './components/flex-carousel.component';
import { FlexFillerComponent } from './components/flex-filler.component';
import { FlexIconComponent } from './components/flex-icon.component';
import { FlexSeparatorComponent } from './components/flex-separator.component';
import { FlexSpacerComponent } from './components/flex-spacer.component';
import { FlexSpanComponent } from './components/flex-span.component';
import { FlexTextComponent } from './components/flex-text.component';

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
  ],
})
export class NgxFlexMessagesModule {}