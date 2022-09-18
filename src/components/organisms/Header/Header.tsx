import React from 'react';

import { HeaderStyled } from '../../atoms/header/Header.styled';
import { PagesLinks } from '../../molecules/PagesLinks/PagesLinks';
import { ReposHeaderLinks } from '../../molecules/RepostHeaderLinks/ReposHeaderLinks';
import { GithubIco, LinkContainer } from './Header.styled';

export const Header = () => {
	return (
		<>
			<HeaderStyled>
				<GithubIco />
			</HeaderStyled>
			<LinkContainer>
				<ReposHeaderLinks />
				<PagesLinks />
			</LinkContainer>
		</>
	);
};
