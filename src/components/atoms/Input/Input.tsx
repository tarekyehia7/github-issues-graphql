import React from 'react';

import { InputStyled } from './Input.styled';

type InputProps = {
	value: string;
	placeholder: string;
	onKeyUp: (e: React.KeyboardEvent<HTMLInputElement>) => void;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export const Input = ({ value, placeholder, onKeyUp, onChange }: InputProps) => {
	return (
		<InputStyled
			value={value}
			placeholder={placeholder}
			onKeyUp={onKeyUp}
			onChange={onChange}
		/>
	);
};
