import React from 'react';
import { withRouter } from 'storybook-addon-react-router-v6';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PagesLinks } from './PagesLinks';

export default {
	title: 'molecules/PagesLinks',
	component: PagesLinks,
	decorators: [withRouter],
} as ComponentMeta<typeof PagesLinks>;

export const Primary: ComponentStory<typeof PagesLinks> = () => <PagesLinks />;
