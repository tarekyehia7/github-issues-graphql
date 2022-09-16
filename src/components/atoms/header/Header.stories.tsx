import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Header } from './Header';
import { GithubIco } from '../../organisms/header/Header.styled';

export default {
  title: 'atoms/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

export const Primary: ComponentStory<typeof Header> = () => (
  <Header>
    <GithubIco />
  </Header>);