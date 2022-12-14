import React, { useEffect, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input, InputProps } from './Input';

export default {
	title: 'atoms/Input',
	component: Input,
} as ComponentMeta<typeof Input>;

export const Primary: ComponentStory<typeof Input> = (args: InputProps) => {
	const [localValue, setValue] = useState<string>(args.value);

	useEffect(() => {
		setValue(args.value);
	}, [args.value]);

	const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};
	const onKeyUpInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			alert('you pressed enter');
		}
	};

	return (
		<Input
			value={localValue}
			onChange={onChangeInput}
			placeholder={args.placeholder}
			onKeyUp={onKeyUpInput}
		/>
	);
};

Primary.args = {
	value: '',
	placeholder: 'type here...',
};
