import React from 'react';

import { PagesLinks } from '../../molecules/PagesLinks/PagesLinks';
import { ReposHeaderLinks } from '../../molecules/RepostHeaderLinks/ReposHeaderLinks';
import { LinkContainer } from './ReposHeader.styled';

export const ReposHeader = () => {
	return (
		<LinkContainer>
			<ReposHeaderLinks />
			<PagesLinks />
		</LinkContainer>
	);
};
