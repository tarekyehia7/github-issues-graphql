import React, { PropsWithChildren } from 'react';

import { HeaderStyled } from './Header.styled';

export const Header = ({ children }: PropsWithChildren) => {
	return <HeaderStyled>{children}</HeaderStyled>;
};
