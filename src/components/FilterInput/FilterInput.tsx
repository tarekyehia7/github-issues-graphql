import React from 'react';

import {
	FilterContainer,
	ClearSearchContainer,
	CloseIconStyled,
	Input,
	SearchIconStyled,
} from './FilterInput.styled';

type FilterInputProps = {
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
				<Input value={value} onKeyUp={onKeyUp} onChange={onChange} />
				<SearchIconStyled />
			</FilterContainer>
			{showClearHistoryText && (
				<ClearSearchContainer onClick={onClearSearchHistoryClick}>
					<CloseIconStyled /> Clear current search query, filters, and sorts
				</ClearSearchContainer>
			)}
		</>
	);
};
