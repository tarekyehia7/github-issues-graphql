import React from 'react';
import { withRouter } from 'storybook-addon-react-router-v6';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Topbar } from './Topbar';

export default {
	title: 'organisms/Topbar',
	component: Topbar,
	decorators: [withRouter],
} as ComponentMeta<typeof Topbar>;

export const Primary: ComponentStory<typeof Topbar> = () => <Topbar />;
