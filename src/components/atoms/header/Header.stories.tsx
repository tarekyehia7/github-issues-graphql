import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { HeaderStyled } from './Header.styled';

export default {
	title: 'atoms/HeaderStyled',
	component: HeaderStyled,
} as ComponentMeta<typeof HeaderStyled>;

export const Primary: ComponentStory<typeof HeaderStyled> = () => <HeaderStyled />;
