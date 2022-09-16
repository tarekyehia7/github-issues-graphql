import React, { PropsWithChildren } from 'react';

import { ButtonStyled } from './Button.styled';

export enum ButtonType {
	Cursor = 'cursor',
	Text = 'Text',
}

export type ButtonProps = {
	disabled: boolean;
	onClick: () => void;
	type: ButtonType;
};

export const Button = ({ disabled, onClick, children, type }: ButtonProps & PropsWithChildren) => {
	return (
		<ButtonStyled type="button" buttonType={type} onClick={onClick} disabled={disabled}>
			{children}
		</ButtonStyled>
	);
};
