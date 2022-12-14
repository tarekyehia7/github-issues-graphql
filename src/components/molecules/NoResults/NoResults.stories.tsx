import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NoResults } from './NoResults';

export default {
	title: 'molecules/NoResults',
	component: NoResults,
} as ComponentMeta<typeof NoResults>;

export const Primary: ComponentStory<typeof NoResults> = () => <NoResults />;
