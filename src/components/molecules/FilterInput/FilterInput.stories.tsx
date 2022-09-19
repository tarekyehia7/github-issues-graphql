import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { FilterInput } from './FilterInput';

export default {
	title: 'molecules/FilterInput',
	component: FilterInput,
} as ComponentMeta<typeof FilterInput>;

export const Primary: ComponentStory<typeof FilterInput> = () => {
	return <FilterInput setGithubQuery={() => null} />;
};
