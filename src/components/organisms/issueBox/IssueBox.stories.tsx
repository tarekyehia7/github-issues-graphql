import React from 'react';
import { withRouter } from 'storybook-addon-react-router-v6';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IssueBox, IssueBoxProps } from './IssueBox';
import { IssueState } from '../../../graphql/generatedTypes/graphql';

export default {
	title: 'organisms/IssueBox',
	component: IssueBox,
	decorators: [withRouter],
	argTypes: {
		createdAt: { table: { disable: true } },
	},
} as ComponentMeta<typeof IssueBox>;

export const Primary: ComponentStory<typeof IssueBox> = (args: IssueBoxProps) => <IssueBox {...args} />;

Primary.args = {
	state: IssueState.Open,
	title: 'Bug: <img/> renders twice in firefox with react 18',
	totalCount: 10,
	issueId: 25276,
	createdAt: '2022-09-09T13:25:28Z',
	authorName: 'tyehia',
	authorUrl: 'https://github.com/tarekyehia7',
};
