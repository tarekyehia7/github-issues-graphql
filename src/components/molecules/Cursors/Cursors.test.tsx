import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import 'jest-styled-components';

import { Cursors, CursorsProps } from './Cursors';
import { PageWithTheme } from '../../../helpers/testing/helpers';

const mockNextClick = jest.fn();
const mockPreviousClick = jest.fn();

const props: CursorsProps = {
	pageNumber: 1,
	totalPages: 100,
	previousButtonDisabled: false,
	nextButtonDisabled: false,
	loadNextData: mockNextClick,
	loadPreviousData: mockPreviousClick,
};

const renderPage = () => {
	const { container, getByText } = render(
		<PageWithTheme>
			<Cursors {...props} />
		</PageWithTheme>,
	);

	return {
		container,
		getByText,
	};
};

describe('<Cursors />', () => {
	it('Should matches snapshot', async () => {
		const { container } = renderPage();
		expect(container).toMatchSnapshot();
	});

	it('Should click previous button', async () => {
		const { getByText } = renderPage();

		fireEvent.click(getByText('< Previous'));
		expect(mockPreviousClick.mock.calls.length).toBe(1);
	});

	it('Should click next button', async () => {
		const { getByText } = renderPage();

		fireEvent.click(getByText('Next >'));
		expect(mockNextClick.mock.calls.length).toBe(1);
	});
});
