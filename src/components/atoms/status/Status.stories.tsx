import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Status, StatusEnum, StatusProps } from './Status';

export default {
  title: 'atoms/Status',
  component: Status,
} as ComponentMeta<typeof Status>;

export const Primary: ComponentStory<typeof Status> = ({ status }: StatusProps) => (
    <Status status={status} />
);

Primary.args = {
    status: StatusEnum.Open
}