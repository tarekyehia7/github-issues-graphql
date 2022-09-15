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
    className?: string;
};

export const Link = ({ className, to, type, children }: LinkProps & PropsWithChildren) => {
	if (type == LinkType.Title) {
		return <TitleLink className={className} to={to ?? '#'}>{children}</TitleLink>;
	} else if (type === LinkType.Normal || type === LinkType.NormalBlue) {
		return (
			<LinkStyled className={className} invertColor={type === LinkType.Normal ? false : true} href={to}>
				{children}
			</LinkStyled>
		);
	} else if (type === LinkType.HeaderLink) {
		return <HeaderLinkStyled className={className} to={to ?? '#'}>{children}</HeaderLinkStyled>;
	}
	return null;
};
