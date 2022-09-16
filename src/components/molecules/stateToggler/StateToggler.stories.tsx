import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StateToggler } from './StateToggler';
import { StatusEnum } from '../../../types/issues';

export default {
	title: 'molecules/StateToggler',
	component: StateToggler,
	argTypes: {
		onStateClick: { action: 'clicked' },
	},
} as ComponentMeta<typeof StateToggler>;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const Primary: ComponentStory<typeof StateToggler> = args => <StateToggler {...args} />;

Primary.args = {
	status: StatusEnum.open,
};
