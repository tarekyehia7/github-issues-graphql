import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';

import { Input } from './Input';
import { PageWithTheme } from '../../../helpers/testing/helpers';

const onKeyUp = jest.fn();
const onChange = jest.fn();

const InputWithTheme = () => {
	return (
		<PageWithTheme>
			<Input value={''} placeholder={'type here...'} onKeyUp={onKeyUp} onChange={onChange} />
		</PageWithTheme>
	);
};

describe('<Input />', () => {
	it('Should have placeholder when empty', async () => {
		const { getByPlaceholderText } = render(<InputWithTheme />);

		expect(getByPlaceholderText('type here...')).toBeInTheDocument();
	});

	it('Should have correct input text', async () => {
		const { getByPlaceholderText } = render(<InputWithTheme />);
		const input = getByPlaceholderText('type here...');

		fireEvent.change(input, { target: { value: 'new text' } });

		expect(onChange.mock.calls.length).toBe(1);
	});

	it('Should fire enter event', async () => {
		const { getByPlaceholderText } = render(<InputWithTheme />);
		const input = getByPlaceholderText('type here...');

		fireEvent.keyUp(input, { key: 'Enter' });

		expect(onKeyUp.mock.calls.length).toBe(1);
	});
});
