import React, { useEffect, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { FilterInput } from './FilterInput';

export default {
	title: 'molecules/FilterInput',
	component: FilterInput,
	argTypes: {
		onChange: { action: 'changed' },
		onKeyUp: { action: 'pressed' },
		onClearSearchHistoryClick: { action: 'clicked' },
	},
} as ComponentMeta<typeof FilterInput>;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const Primary: ComponentStory<typeof FilterInput> = args => {
	const [localValue, setValue] = useState<string>(args.value);
	const [localShowClearHistorytext, setLocalShowClearHistoryText] = useState(
		args.showClearHistoryText,
	);

	useEffect(() => {
		setValue(args.value);
	}, [args.value]);

	useEffect(() => {
		setLocalShowClearHistoryText(args.showClearHistoryText);
	}, [args.showClearHistoryText]);

	const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};
	const onKeyUpInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			setLocalShowClearHistoryText(true);
		}
	};

	const onClearSearchHistoryClick = () => {
		setValue('');
		setLocalShowClearHistoryText(false);
	};

	return (
		<FilterInput
			value={localValue}
			showClearHistoryText={localShowClearHistorytext}
			onChange={onChangeInput}
			onKeyUp={onKeyUpInput}
			onClearSearchHistoryClick={onClearSearchHistoryClick}
		/>
	);
};

Primary.args = {
	value: '',
	showClearHistoryText: false,
};
