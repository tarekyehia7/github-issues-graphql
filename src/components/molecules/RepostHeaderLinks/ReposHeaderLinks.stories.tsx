import React from 'react';
import { withRouter } from 'storybook-addon-react-router-v6';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ReposHeaderLinks } from './ReposHeaderLinks';

export default {
	title: 'molecules/ReposHeaderLinks',
	component: ReposHeaderLinks,
	decorators: [withRouter],
} as ComponentMeta<typeof ReposHeaderLinks>;

export const Primary: ComponentStory<typeof ReposHeaderLinks> = () => <ReposHeaderLinks />;
