import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IssueDetailsComment } from './IssueDetailsComment';

export default {
  title: 'organisms/IssueDetailsComment',
  component: IssueDetailsComment,
  argTypes: {
    createdAt: { table: { disable: true } }
  }
} as ComponentMeta<typeof IssueDetailsComment>;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const Primary: ComponentStory<typeof IssueDetailsComment> = (args) => (
  <IssueDetailsComment
    {...args}
  />);

Primary.args = {
    authorName: 'tyehia7',
    authorUrl: 'https://github.com/tarekyehia7',
    avatarUrl: 'https://avatars.githubusercontent.com/u/11144528?v=4',
    createdAt: '2022-09-09T13:25:28Z',
    bodyHTML: "<h4 style={{ margin: '1rem' }}>This is card body</h4>"
};