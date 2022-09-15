import React from 'react';

import { Header as HeaderStyled } from '../../atoms/header/Header';
import { GithubIco } from './Header.styled';

export const Header = () => {
	return (
		<HeaderStyled>
			<GithubIco />
		</HeaderStyled>
	);
};
