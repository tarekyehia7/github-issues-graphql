import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import 'jest-styled-components';

import { StateToggler, StateTogglerProps } from './StateToggler';
import { PageWithTheme } from '../../../helpers/testing/helpers';
import { StatusEnum } from '../../../types/issues';
import { theme } from '../../../themes';

const mockOnClick = jest.fn();

const props: StateTogglerProps = {
	status: StatusEnum.open,
	onStateClick: mockOnClick,
};

const renderPage = (status?: StatusEnum) => {
	const { container, getByText } = render(
		<PageWithTheme>
			<StateToggler {...props} status={status ?? props.status} />
		</PageWithTheme>,
	);

	return {
		container,
		getByText,
	};
};

describe('<StateToggler />', () => {
	it('Should matches snapshot', async () => {
		const { container } = renderPage();
		expect(container).toMatchSnapshot();
	});

	it('Should trigger Open button on click', async () => {
		const { getByText } = renderPage();

		fireEvent.click(getByText('Open'));
		expect(mockOnClick.mock.calls.length).toBe(1);
		expect(mockOnClick).toHaveBeenCalledWith(StatusEnum.open);
	});

	it('Should trigger Closed button on click', async () => {
		const { getByText } = renderPage();

		fireEvent.click(getByText('Closed'));
		expect(mockOnClick.mock.calls.length).toBe(1);
		expect(mockOnClick).toHaveBeenCalledWith(StatusEnum.closed);
	});

	it('Should have correct color for Open button', async () => {
		const { getByText } = renderPage(StatusEnum.open);

		expect(getByText('Open')).toHaveStyleRule(`color`, theme.colors.lightBlack);
	});

	it('Should have correct color for Closed button', async () => {
		const { getByText } = renderPage(StatusEnum.open);

		expect(getByText('Closed')).toHaveStyleRule(`color`, theme.colors.darkGray);
	});
});
