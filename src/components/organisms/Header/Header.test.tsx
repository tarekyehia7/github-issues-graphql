import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';

import { Header } from './Header';
import { PageWithTheme } from '../../../helpers/testing/helpers';

const HeaderWithTheme = () => {
	return (
		<PageWithTheme>
			<Header />
		</PageWithTheme>
	);
};

describe('<Header />', () => {
	it('Should match snapshot', () => {
		const { container } = render(<HeaderWithTheme />);
		expect(container).toMatchSnapshot();
	});
});
