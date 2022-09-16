import React, { PropsWithChildren } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Title, TitleProps, TitleSizeTypes } from './Title';

export default {
	title: 'atoms/Title',
	description: 'Uses title from atoms',
	component: Title,
} as ComponentMeta<typeof Title>;

export const Primary: ComponentStory<typeof Title> = (args: TitleProps & PropsWithChildren) => {
	return <Title {...args}>{args.children}</Title>;
};

Primary.args = {
	children: 'This is a title',
	titleSize: TitleSizeTypes.Medium,
};
