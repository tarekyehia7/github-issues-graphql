import React from 'react';

import { HeaderStyled } from '../../atoms/header/Header.styled';
import { GithubIco } from './Header.styled';

export const Header = () => {
	return (
		<HeaderStyled>
			<GithubIco />
		</HeaderStyled>
	);
};
