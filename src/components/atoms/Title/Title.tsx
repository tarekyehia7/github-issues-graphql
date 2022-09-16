import React, { PropsWithChildren } from 'react';

import { TitleSmallStyled, TitleBigStyled, TitleMediumStyled } from './Title.styled';

export enum TitleSizeTypes {
	Small = 'small',
	Medium = 'medium',
	Large = 'large',
	Paragraph = 'paragraph',
}

type TitleProps = {
	titleSize: TitleSizeTypes;
};

export const Title = ({ titleSize, children }: TitleProps & PropsWithChildren) => {
	if (titleSize === TitleSizeTypes.Small) {
		return <TitleSmallStyled>{children}</TitleSmallStyled>;
	} else if (titleSize === TitleSizeTypes.Medium) {
		return <TitleMediumStyled>{children}</TitleMediumStyled>;
	} else if (titleSize === TitleSizeTypes.Large) {
		return <TitleBigStyled>{children}</TitleBigStyled>;
	} else if (titleSize === TitleSizeTypes.Paragraph) {
		return <p>{children}</p>;
	} else {
		return null;
	}
};
