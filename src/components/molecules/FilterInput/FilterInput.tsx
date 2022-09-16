import React from 'react';

import { FilterContainer, CloseIconStyled, SearchIconStyled } from './FilterInput.styled';
import { Input } from '../../atoms/Input/Input';
import { Button, ButtonType } from '../../atoms/button/Button';

export type FilterInputProps = {
	value: string;
	showClearHistoryText: boolean;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onKeyUp: (e: React.KeyboardEvent<HTMLInputElement>) => void;
	onClearSearchHistoryClick: () => void;
};

export const FilterInput = ({
	value,
	onChange,
	onKeyUp,
	showClearHistoryText,
	onClearSearchHistoryClick,
}: FilterInputProps) => {
	return (
		<>
			<FilterContainer>
				<Input
					value={value}
					placeholder="type here..."
					onKeyUp={onKeyUp}
					onChange={onChange}
				/>
				<SearchIconStyled />
			</FilterContainer>
			{showClearHistoryText && (
				<Button disabled={false} type={ButtonType.Text} onClick={onClearSearchHistoryClick}>
					<CloseIconStyled /> Clear current search query, filters, and sorts
				</Button>
			)}
		</>
	);
};
