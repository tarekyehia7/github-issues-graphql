import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Title, TitleSizeTypes } from './Title';

export default {
	title: 'atoms/Title',
	component: Title,
} as ComponentMeta<typeof Title>;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const Primary: ComponentStory<typeof Title> = args => {
	return <Title {...args}>{args.children}</Title>;
};

Primary.args = {
	children: 'This is a title',
	titleSize: TitleSizeTypes.Medium,
};
