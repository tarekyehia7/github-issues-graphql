import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import { Link, LinkType } from './Link';
import { PageWithTheme } from '../../../helpers/testing/helpers';

const to = 'http://github.com';

const renderPage = (type: LinkType) => {
	const { getByText } = render(
		<PageWithTheme>
			<Link to={to} type={type}>
				Test Link
			</Link>
		</PageWithTheme>,
	);
	return {
		getByText,
	};
};

describe('<Link />', () => {
	it('Should render title link type', () => {
		const { getByText } = renderPage(LinkType.Title);
		const link = getByText('Test Link');

		expect(link).toHaveAttribute('href', `/${to}`);
		expect(link).toBeInTheDocument();
	});

	it('Should render header link type', () => {
		const { getByText } = renderPage(LinkType.HeaderLink);
		const link = getByText('Test Link');

		expect(link).toHaveAttribute('href', `/${to}`);
		expect(link).toBeInTheDocument();
	});

	it('Should render normal link type', () => {
		const { getByText } = renderPage(LinkType.Normal);
		const link = getByText('Test Link');

		expect(link).toHaveAttribute('href', to);
		expect(link).toBeInTheDocument();
	});

	it('Should render normal blue link type', () => {
		const { getByText } = renderPage(LinkType.NormalBlue);
		const link = getByText('Test Link');

		expect(link).toHaveAttribute('href', to);
		expect(link).toBeInTheDocument();
	});
});
