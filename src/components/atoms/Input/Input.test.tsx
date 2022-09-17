import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import { Input } from './Input';
import { PageWithTheme } from '../../../helpers/testing/helpers';

const onKeyUp = jest.fn();
const onChange = jest.fn();

const renderPage = () => {
	const { getByTestId } = render(
		<PageWithTheme>
			<Input value={''} placeholder={'type here...'} onKeyUp={onKeyUp} onChange={onChange} />
		</PageWithTheme>,
	);
	return {
		getByTestId,
	};
};

describe('<Input />', () => {
	it('Should have placeholder when empty', () => {
		const { getByTestId } = renderPage();

		expect(getByTestId('Input')).toHaveAttribute('placeholder', 'type here...');
	});

	it('Should have correct input text', () => {
		const { getByTestId } = renderPage();
		const input = getByTestId('Input');

		fireEvent.change(input, { target: { value: 'new text' } });

		expect(onChange.mock.calls.length).toBe(1);
	});

	it('Should fire enter event', () => {
		const { getByTestId } = renderPage();
		const input = getByTestId('Input');

		fireEvent.keyUp(input, { key: 'Enter' });

		expect(onKeyUp.mock.calls.length).toBe(1);
	});
});
