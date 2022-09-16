import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Image, ImageShapeEnum } from './Image';

export default {
  title: 'atoms/Image',
  component: Image,
  argTypes: {
        shape: {
            options: Object.values(ImageShapeEnum),
            control: { type: 'select' },
        }
    }
} as ComponentMeta<typeof Image>;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const Primary: ComponentStory<typeof Image> = (args) => {

    return (
        <Image {...args} />
    );
};

Primary.args = {
    shape: ImageShapeEnum.Circle,
    avatarUrl: 'https://avatars.githubusercontent.com/u/11144528?v=4'
};