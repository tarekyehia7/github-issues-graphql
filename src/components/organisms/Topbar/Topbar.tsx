import React from 'react';

import { PagesLinks } from '../../molecules/PagesLinks/PagesLinks';
import { ReposHeaderLinks } from '../../molecules/RepostHeaderLinks/ReposHeaderLinks';
import { LinkContainer } from './Topbar.styled';

export const Topbar = () => {
	return (
		<LinkContainer>
			<ReposHeaderLinks />
			<PagesLinks />
		</LinkContainer>
	);
};
