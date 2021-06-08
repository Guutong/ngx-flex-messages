export type MessageCommon = {
  quickReply?: QuickReply;
  sender?: Sender;
};

export type FlexMessage = MessageCommon & {
  type: 'flex';
  altText: string;
  contents: FlexContainer;
};

export type FlexContainer = FlexBubble | FlexCarousel;

export type FlexCarousel = {
  type: 'carousel';
  contents: FlexBubble[];
};

export type FlexBubble = {
  type: 'bubble';
  size?: 'nano' | 'micro' | 'kilo' | 'mega' | 'giga';
  direction?: 'ltr' | 'rtl';
  header?: FlexBox;
  hero?: FlexBox | FlexImage;
  body?: FlexBox;
  footer?: FlexBox;
  styles?: FlexBubbleStyle;
  action?: Action;
};

export type FlexBubbleStyle = {
  header?: FlexBlockStyle;
  hero?: FlexBlockStyle;
  body?: FlexBlockStyle;
  footer?: FlexBlockStyle;
};

export type FlexBlockStyle = {
  backgroundColor?: string;
  separator?: boolean;
  separatorColor?: string;
};

export type FlexComponent =
  | FlexBox
  | FlexButton
  | FlexImage
  | FlexIcon
  | FlexText
  | FlexSpan
  | FlexSeparator
  | FlexFiller
  | FlexSpacer;

export type FlexImage = {
  type: 'image';
  url: string;
  flex?: number;
  margin?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  align?: 'start' | 'end' | 'center';
  gravity?: 'top' | 'bottom' | 'center';
  size?:
    | string
    | 'xxs'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | 'xxl'
    | '3xl'
    | '4xl'
    | '5xl'
    | 'full';
  aspectRatio?: string;
  aspectMode?: 'cover' | 'fit';
  backgroundColor?: string;
  action?: Action;
  animated?: Boolean;
} & Offset;

export type FlexBox = {
  type: 'box';
  layout: 'horizontal' | 'vertical' | 'baseline';
  contents: FlexComponent[];
  backgroundColor?: string;
  borderColor?: string;
  borderWidth?:
    | string
    | 'none'
    | 'light'
    | 'normal'
    | 'medium'
    | 'semi-bold'
    | 'bold';
  cornerRadius?: string | 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  width?: string;
  height?: string;
  flex?: number;
  spacing?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  margin?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  paddingAll?: string;
  paddingTop?: string;
  paddingBottom?: string;
  paddingStart?: string;
  paddingEnd?: string;
  action?: Action;
  justifyContent?:
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';

  alignItems?: 'flex-start' | 'center' | 'flex-end';
  background?: Background;
} & Offset;

export type FlexButton = {
  type: 'button';
  action: Action;
  flex?: number;
  margin?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  height?: 'sm' | 'md';
  style?: 'link' | 'primary' | 'secondary';
  color?: string;
  gravity?: 'top' | 'bottom' | 'center';
  adjustMode?: 'shrink-to-fit';
} & Offset;

export type FlexFiller = {
  type: 'filler';
  flex?: number;
};

export type FlexIcon = {
  type: 'icon';
  url: string;
  margin?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  size?:
    | string
    | 'xxs'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | 'xxl'
    | '3xl'
    | '4xl'
    | '5xl';
  aspectRatio?: string;
} & Offset;

export type Offset = {
  position?: 'relative' | 'absolute';
  offsetTop?: string;
  offsetBottom?: string;
  offsetStart?: string;
  offsetEnd?: string;
};

export type FlexText = {
  type: 'text';
  text: string;
  contents?: FlexSpan[];
  adjustMode?: 'shrink-to-fit';
  flex?: number;
  margin?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  size?:
    | string
    | 'xxs'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | 'xxl'
    | '3xl'
    | '4xl'
    | '5xl';
  align?: 'start' | 'end' | 'center';
  gravity?: 'top' | 'bottom' | 'center';
  wrap?: boolean;
  maxLines?: number;
  weight?: 'regular' | 'bold';
  color?: string;
  action?: Action;
  style?: string;
  decoration?: string;
} & Offset;

export type FlexSpan = {
  type: 'span';
  text: string;
  color?: string;
  size?:
    | string
    | 'xxs'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | 'xxl'
    | '3xl'
    | '4xl'
    | '5xl';
  weight?: string;
  style?: string;
  decoration?: string;
};

export type FlexSeparator = {
  type: 'separator';
  margin?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  color?: string;
};
export type FlexSpacer = {
  type: 'spacer';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
};
export type Background = {
  type: 'linearGradient';
  angle: string;
  startColor: string;
  endColor: string;
  centerColor?: string;
  centerPosition?: string;
};

export type Action<ExtraFields = { label: string }> = (
  | PostbackAction
  | MessageAction
  | URIAction
  | DatetimePickerAction
  | { type: 'camera' }
  | { type: 'cameraRoll' }
  | { type: 'location' }
) &
  ExtraFields;

export type PostbackAction = {
  type: 'postback';
  data: string;
  text?: string;
  displayText?: string;
};

export type MessageAction = {
  type: 'message';
  text: string;
};
export type AltURI = {
  desktop: string;
};
export type URIAction = {
  type: 'uri';
  uri: string;
  altUri?: AltURI;
};
export type DatetimePickerAction = {
  type: 'datetimepicker';
  data: string;
  mode: 'date' | 'time' | 'datetime';
  initial?: string;
  max?: string;
  min?: string;
};

export type Size = {
  width: number;
  height: number;
};
export type QuickReply = {
  items: QuickReplyItem[];
};

export type QuickReplyItem = {
  type: 'action';
  imageUrl?: string;
  action: Action;
};

export type Sender = {
  name?: string;
  iconUrl?: string;
};
