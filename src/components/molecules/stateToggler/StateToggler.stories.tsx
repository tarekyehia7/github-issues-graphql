import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StateToggler, StateTogglerProps } from './StateToggler';
import { StatusEnum } from '../../../types/issues';

export default {
	title: 'molecules/StateToggler',
	component: StateToggler,
	argTypes: {
		onStateClick: { action: 'clicked' },
	},
} as ComponentMeta<typeof StateToggler>;

export const Primary: ComponentStory<typeof StateToggler> = (args: StateTogglerProps) => (
	<StateToggler {...args} />
);

Primary.args = {
	status: StatusEnum.open,
};
