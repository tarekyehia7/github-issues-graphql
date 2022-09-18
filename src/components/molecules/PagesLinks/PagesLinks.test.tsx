import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';

import { PagesLinks } from './PagesLinks';
import { PageWithTheme } from '../../../helpers/testing/helpers';

const ReposHeaderWithTheme = () => {
	return (
		<PageWithTheme>
			<PagesLinks />
		</PageWithTheme>
	);
};

describe('<IssueDetailsHeader />', () => {
	it('Should match snapshot', () => {
		const { container } = render(<ReposHeaderWithTheme />);
		expect(container).toMatchSnapshot();
	});

	it('Should have correct links', () => {
		const { getAllByRole } = render(<ReposHeaderWithTheme />);
		const links = getAllByRole('link');

		expect(links).toHaveLength(1);
		expect(links[0]).toHaveAttribute('href', `/`);
	});
});
