import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Card, CardType } from './Card';

export default {
	title: 'molecules/Card',
	component: Card,
} as ComponentMeta<typeof Card>;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const Primary: ComponentStory<typeof Card> = args => {
	return <Card {...args}>{args.children}</Card>;
};

Primary.args = {
	title: <>This is card title</>,
	type: CardType.withAvatar,
	authorUrl: 'https://github.com/tarekyehia7',
	avatarUrl: 'https://avatars.githubusercontent.com/u/11144528?v=4',
	children: <h4 style={{ margin: '1rem' }}>This is card body</h4>,
};
