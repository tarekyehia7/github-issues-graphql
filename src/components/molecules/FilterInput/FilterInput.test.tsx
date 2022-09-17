import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import 'jest-styled-components';

import { FilterInput, FilterInputProps } from './FilterInput';
import { PageWithTheme } from '../../../helpers/testing/helpers';

const mockOnChange = jest.fn();
const mockOnKeyUp = jest.fn();
const mockOnClearSearchHistoryClick = jest.fn();

const props: FilterInputProps = {
	value: 'this is my input',
	showClearHistoryText: true,
	onChange: mockOnChange,
	onKeyUp: mockOnKeyUp,
	onClearSearchHistoryClick: mockOnClearSearchHistoryClick,
};

const renderPage = () => {
	const { container, getByText, getByTestId } = render(
		<PageWithTheme>
			<FilterInput {...props} />
		</PageWithTheme>,
	);

	return {
		container,
		getByText,
		getByTestId,
	};
};

describe('<FilterInput />', () => {
	it('Should matches snapshot', () => {
		const { container } = renderPage();
		expect(container).toMatchSnapshot();
	});

	it('Should trigger onChange', () => {
		const { getByTestId } = renderPage();

		fireEvent.change(getByTestId('Input'), { target: { value: '23' } });
		expect(mockOnChange.mock.calls.length).toBe(1);
	});

	it('Should trigger onKeyUp', () => {
		const { getByTestId } = renderPage();

		fireEvent.keyUp(getByTestId('Input'));
		expect(mockOnKeyUp.mock.calls.length).toBe(1);
	});

	it('Should trigger click event on clicking clear history', () => {
		const { getByText } = renderPage();

		fireEvent.click(getByText('Clear current search query, filters, and sorts'));
		expect(mockOnClearSearchHistoryClick.mock.calls.length).toBe(1);
	});
});
