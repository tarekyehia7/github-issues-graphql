import React, { PropsWithChildren } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button, ButtonProps, ButtonType } from './Button';

export default {
	title: 'atoms/Button',
	component: Button,
	argTypes: {
		onClick: { action: 'clicked' },
		type: {
			options: Object.values(ButtonType),
			control: { type: 'select' },
		},
	},
} as ComponentMeta<typeof Button>;

export const Primary: ComponentStory<typeof Button> = (args: ButtonProps & PropsWithChildren) => (
	<Button {...args}>{args.children}</Button>
);

Primary.args = {
	disabled: false,
	children: 'test',
	type: ButtonType.Cursor,
};
