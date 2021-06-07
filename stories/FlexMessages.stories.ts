import { Story, Meta } from '@storybook/angular/types-6-0';
import { FlexMessagesComponent } from '../projects/flex-messages/src/lib/flex-messages.component';

export default {
  title: 'Atomics/FlexMessages',
  component: FlexMessagesComponent,
  argTypes: {}
} as Meta;

const Template: Story<FlexMessagesComponent> = (args: FlexMessagesComponent) => ({
  component: FlexMessagesComponent,
  props: args,
});

export const FlexMessagesExample1 = Template.bind({});
FlexMessagesExample1.args = {};

export const FlexMessagesExample2 = Template.bind({});
FlexMessagesExample2.args = {};