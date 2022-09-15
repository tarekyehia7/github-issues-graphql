import React, { PropsWithChildren } from 'react';

import { TitleSmallStyled, TitleBigStyled } from './Title.styled';

export enum TitleSizeTypes {
	Small = 'small',
	Medium = 'medium',
}

type TitleProps = {
	titleSize: TitleSizeTypes;
};

export const Title = ({ titleSize, children }: TitleProps & PropsWithChildren) => {
	if (titleSize === TitleSizeTypes.Small) {
		return <TitleSmallStyled>{children}</TitleSmallStyled>;
	} else if (titleSize === TitleSizeTypes.Medium) {
		return <TitleBigStyled>{children}</TitleBigStyled>;
	} else {
		return null;
	}
};
