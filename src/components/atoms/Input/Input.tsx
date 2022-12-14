import React from 'react';

import { InputStyled } from './Input.styled';

export type InputProps = {
	value: string;
	placeholder: string;
	onKeyUp: (e: React.KeyboardEvent<HTMLInputElement>) => void;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export const Input = ({ value, placeholder, onKeyUp, onChange }: InputProps) => {
	return (
		<InputStyled
			data-testid="Input"
			value={value}
			placeholder={placeholder}
			onKeyUp={onKeyUp}
			onChange={onChange}
		/>
	);
};
