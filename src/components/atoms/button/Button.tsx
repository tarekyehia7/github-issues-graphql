import React from 'react';

import { ButtonStyled } from './Button.styled';

export enum ButtonType {
	Cursor = 'cursor',
}

export type ButtonProps = {
	disabled: boolean;
	onClick: () => void;
	value: string;
	type: ButtonType;
};

export const Button = ({ disabled, onClick, value }: ButtonProps) => {
	return (
		<ButtonStyled onClick={onClick} disabled={disabled}>
			{value}
		</ButtonStyled>
	);
};
