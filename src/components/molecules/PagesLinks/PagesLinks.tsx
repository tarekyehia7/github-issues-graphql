import React from 'react';

import { Link, LinkType } from '../../atoms/link/Link';
import { PagesLinksStyled } from './PagesLinks.styled';

export const PagesLinks = () => {
	return (
		<PagesLinksStyled>
			<Link type={LinkType.HeaderLink} to={'/'}>
				Issues
			</Link>
		</PagesLinksStyled>
	);
};
