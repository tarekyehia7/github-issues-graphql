import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Header } from './Header';
import { PageWithTheme } from '../../testing/helpers';

const HeaderWithTheme = () => {
	return (
		<PageWithTheme>
			<Header>Test</Header>
		</PageWithTheme>
	);
};

describe('<Header />', () => {
	it('Should render example text', async () => {
		const { getByText } = render(<HeaderWithTheme />);

		expect(getByText('Test')).toBeInTheDocument();
	});
});
