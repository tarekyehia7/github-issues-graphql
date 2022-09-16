import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Image, ImageProps, ImageShapeEnum } from './Image';

export default {
	title: 'atoms/Image',
	component: Image,
	argTypes: {
		shape: {
			options: Object.values(ImageShapeEnum),
			control: { type: 'select' },
		},
	},
} as ComponentMeta<typeof Image>;

export const Primary: ComponentStory<typeof Image> = (args: ImageProps) => {
	return (
		<div>
			<Image {...args} />
		</div>
	);
};

Primary.args = {
	shape: ImageShapeEnum.Circle,
	avatarUrl: 'https://avatars.githubusercontent.com/u/11144528?v=4',
};
