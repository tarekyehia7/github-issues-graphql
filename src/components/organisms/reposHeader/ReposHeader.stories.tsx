import React from 'react';
import { withRouter } from 'storybook-addon-react-router-v6';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ReposHeader } from './ReposHeader';

export default {
  title: 'organisms/ReposHeader',
  component: ReposHeader,
  decorators: [withRouter],
} as ComponentMeta<typeof ReposHeader>;

export const Primary: ComponentStory<typeof ReposHeader> = () => (
  <ReposHeader />
);