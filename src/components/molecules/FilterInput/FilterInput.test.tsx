import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import 'jest-styled-components';

import { FilterInput, FilterInputProps } from './FilterInput';
import { PageWithTheme } from '../../../helpers/testing/helpers';

const mockSetGithubQuery = jest.fn();

const props: FilterInputProps = {
	setGithubQuery: mockSetGithubQuery,
};

const renderPage = () => {
	const { container, getByText, getByTestId, findByText } = render(
		<PageWithTheme>
			<FilterInput {...props} />
		</PageWithTheme>,
	);

	return {
		container,
		getByText,
		getByTestId,
		findByText,
	};
};

describe('<FilterInput />', () => {
	it('Should matches snapshot', () => {
		const { container } = renderPage();
		expect(container).toMatchSnapshot();
	});

	it('Should trigger onChange and change text', () => {
		const { getByTestId } = renderPage();
		const input = getByTestId('Input');

		fireEvent.change(input, { target: { value: '23' } });
		expect(input).toHaveValue('23');
	});

	it('Should trigger onKeyUp', () => {
		const { getByTestId } = renderPage();

		const input = getByTestId('Input');

		fireEvent.change(input, { target: { value: '23' } });
		fireEvent.keyUp(input, { key: 'Enter' });
		expect(mockSetGithubQuery.mock.calls.length).toBe(1);
		expect(mockSetGithubQuery).toBeCalledWith('23', false);
	});

	it('Should trigger click event on clicking clear history', () => {
		const { getByTestId, getByText } = renderPage();

		const input = getByTestId('Input');
		fireEvent.change(input, { target: { value: '23' } });
		fireEvent.keyUp(input, { key: 'Enter' });
		fireEvent.click(getByText('Clear current search query, filters, and sorts'));
		expect(mockSetGithubQuery.mock.calls.length).toBe(2);
		expect(mockSetGithubQuery).toBeCalledWith('', true);
	});

	it('Should not update query in case of empty input', () => {
		const { getByTestId } = renderPage();

		const input = getByTestId('Input');
		fireEvent.change(input, { target: { value: '' } });
		fireEvent.keyUp(input, { key: 'Enter' });
		expect(mockSetGithubQuery.mock.calls.length).toBe(0);
	});

	it('Should hide clear Search History button', () => {
		const { getByTestId, getByText, container } = renderPage();

		const input = getByTestId('Input');
		fireEvent.change(input, { target: { value: '23' } });
		fireEvent.keyUp(input, { key: 'Enter' });
		fireEvent.click(getByText('Clear current search query, filters, and sorts'));

		expect(container.children).toHaveLength(1);
	});
});
