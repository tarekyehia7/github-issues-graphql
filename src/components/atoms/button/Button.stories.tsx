import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button, ButtonType } from './Button';

export default {
  title: 'atoms/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked'},
    type: {
        options: Object.values(ButtonType),
        control: { type: 'select' },
    }
}
} as ComponentMeta<typeof Button>;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const Primary: ComponentStory<typeof Button> = (args) => (
  <Button
    {...args}
  />);

Primary.args = {
    disabled: false,
    value: 'test',
    type: ButtonType.Cursor
};
