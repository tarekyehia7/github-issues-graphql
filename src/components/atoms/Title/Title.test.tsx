import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Title, TitleSizeTypes } from './Title';
import { PageWithTheme } from '../../testing/helpers';

const TitleWithTheme = ({ type }: { type: TitleSizeTypes }) => {
	return (
		<PageWithTheme>
			<Title titleSize={type}>Title test</Title>
		</PageWithTheme>
	);
};

describe('<Title />', () => {
	it('Should render title correctly', async () => {
		const { getByText } = render(<TitleWithTheme type={TitleSizeTypes.Small} />);

		expect(getByText('Title test')).toBeInTheDocument();
	});

	it('Should render title correctly', async () => {
		const { getByText } = render(<TitleWithTheme type={TitleSizeTypes.Medium} />);

		expect(getByText('Title test')).toBeInTheDocument();
	});
});
