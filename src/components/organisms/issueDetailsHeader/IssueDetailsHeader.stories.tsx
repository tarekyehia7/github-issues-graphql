import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IssueDetailsHeader, IssueHeaderProps } from './IssueDetailsHeader';
import { IssueState } from '../../../graphql/generatedTypes/graphql';

export default {
	title: 'organisms/IssueDetailsHeader',
	component: IssueDetailsHeader,
	argTypes: {
		createdAt: { table: { disable: true } },
	},
} as ComponentMeta<typeof IssueDetailsHeader>;

export const Primary: ComponentStory<typeof IssueDetailsHeader> = (args: IssueHeaderProps) => (
	<IssueDetailsHeader {...args} />
);

Primary.args = {
	state: IssueState.Open,
	title: 'This is a title',
	issueId: '25276',
	authorName: 'tyehia7',
	createdAt: '2022-09-09T13:25:28Z',
};
