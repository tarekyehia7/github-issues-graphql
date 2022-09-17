import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import { Button, ButtonType } from './Button';
import { PageWithTheme } from '../../../helpers/testing/helpers';

const mockClick = jest.fn();
const renderPage = () => {
	const { getByText } = render(
		<PageWithTheme>
			<Button disabled={false} type={ButtonType.Cursor} onClick={mockClick}>
				NiceButton
			</Button>
		</PageWithTheme>,
	);

	return {
		getByText,
	};
};

describe('<Button />', () => {
	it('Should fire click event', async () => {
		const { getByText } = renderPage();

		fireEvent.click(getByText('NiceButton'));
		expect(mockClick.mock.calls.length).toBe(1);
	});
});
