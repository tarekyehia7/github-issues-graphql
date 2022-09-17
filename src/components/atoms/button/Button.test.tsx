import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import { Button, ButtonType } from './Button';
import { PageWithTheme } from '../../../helpers/testing/helpers';

const mockClick = jest.fn();
const renderPage = (disabled: boolean) => {
	const { getByText } = render(
		<PageWithTheme>
			<Button disabled={disabled} type={ButtonType.Cursor} onClick={mockClick}>
				NiceButton
			</Button>
		</PageWithTheme>,
	);

	return {
		getByText,
	};
};

describe('<Button />', () => {
	it('Should fire click event and is not disabled', () => {
		const { getByText } = renderPage(false);
		const button = getByText('NiceButton');

		fireEvent.click(button);
		expect(mockClick.mock.calls.length).toBe(1);
		expect(button).not.toBeDisabled();
	});

	it('Should not fire click event and is disabled', () => {
		const { getByText } = renderPage(true);
		const button = getByText('NiceButton');

		fireEvent.click(button);
		expect(mockClick.mock.calls.length).toBe(0);
		expect(button).toBeDisabled();
	});
});
