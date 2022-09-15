import React, { PropsWithChildren } from 'react';

import { TitleLink, LinkStyled, HeaderLinkStyled } from './Link.styled';

export enum LinkType {
	Title,
	Normal,
	NormalBlue,
	HeaderLink,
}

type LinkProps = {
	to: string | undefined;
	type: LinkType;
};

export const Link = ({ to, type, children }: LinkProps & PropsWithChildren) => {
	if (type == LinkType.Title) {
		return <TitleLink to={to ?? '#'}>{children}</TitleLink>;
	} else if (type === LinkType.Normal || type === LinkType.NormalBlue) {
		return (
			<LinkStyled invertColor={type === LinkType.Normal ? false : true} href={to}>
				{children}
			</LinkStyled>
		);
	} else if (type === LinkType.HeaderLink) {
		return <HeaderLinkStyled to={to ?? '#'}>{children}</HeaderLinkStyled>;
	}
	return null;
};
