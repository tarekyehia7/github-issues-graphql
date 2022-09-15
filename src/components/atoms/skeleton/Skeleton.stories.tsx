import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Skeleton } from './Skeleton';

export default {
  title: 'atoms/Skeleton',
  component: Skeleton,
} as ComponentMeta<typeof Skeleton>;

export const Primary: ComponentStory<typeof Skeleton> = () => (
  <Skeleton />);
