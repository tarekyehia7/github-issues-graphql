import React, { useCallback, useState } from 'react';

import { FilterContainer, CloseIconStyled, SearchIconStyled } from './FilterInput.styled';
import { Input } from '../../atoms/Input/Input';
import { Button, ButtonType } from '../../atoms/button/Button';

export type FilterInputProps = {
	setGithubQuery: (inputText: string, setPageNum: boolean) => void;
};

const Icon = () => <SearchIconStyled />;
const MemoIcon = React.memo(Icon);

type ClearSearchHistoryType = {
	showClearHistoryText: boolean;
	clearSearchHistory: () => void;
};

const ClearSearchHistoryButtonComponent = ({
	showClearHistoryText,
	clearSearchHistory,
}: ClearSearchHistoryType) => {
	return (
		<>
			{showClearHistoryText && (
				<Button disabled={false} type={ButtonType.Text} onClick={clearSearchHistory}>
					<CloseIconStyled /> Clear current search query, filters, and sorts
				</Button>
			)}
		</>
	);
};

const ClearSearchHistoryButton = React.memo(ClearSearchHistoryButtonComponent);

export const FilterInput = ({ setGithubQuery }: FilterInputProps) => {
	const [inputText, setInputText] = useState('');
	const [showClearHistoryText, setShowClearHistoryText] = useState(false);

	const onChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			setInputText(e.target.value.replaceAll(':', ''));
		},
		[inputText],
	);

	const onKeyUp = useCallback(
		(e: React.KeyboardEvent<HTMLInputElement>) => {
			if (e.key === 'Enter') {
				if (inputText !== '') {
					setGithubQuery(inputText, false);
					setShowClearHistoryText(true);
				}
			}
		},
		[inputText],
	);

	const clearSearchHistory = useCallback(() => {
		setInputText('');
		setGithubQuery('', true);
		setShowClearHistoryText(false);
	}, [showClearHistoryText]);

	return (
		<>
			<FilterContainer>
				<Input
					value={inputText}
					placeholder="type here..."
					onKeyUp={onKeyUp}
					onChange={onChange}
				/>
				<MemoIcon />
			</FilterContainer>
			<ClearSearchHistoryButton
				showClearHistoryText={showClearHistoryText}
				clearSearchHistory={clearSearchHistory}
			/>
		</>
	);
};
