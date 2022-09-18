import React from 'react';
import { render } from '@testing-library/react';

import { Link, LinkType } from './Link';
import { PageWithTheme } from '../../../helpers/testing/helpers';

const linkTo = 'http://github.com';

const renderPage = (type: LinkType, to: string | undefined) => {
	const { container, getByText } = render(
		<PageWithTheme>
			<Link className="test" to={to} type={type}>
				Test Link
			</Link>
		</PageWithTheme>,
	);
	return {
		getByText,
		container,
	};
};

describe('<Link />', () => {
	it('Should render title link type', () => {
		const { getByText } = renderPage(LinkType.Title, linkTo);
		const link = getByText('Test Link');

		expect(link).toHaveAttribute('href', `/${linkTo}`);
		expect(link.classList.contains('test')).toBe(true);
		expect(link).toBeInTheDocument();
	});

	it('Should have / in title link in case of undefined', () => {
		const { getByText } = renderPage(LinkType.Title, undefined);
		const link = getByText('Test Link');

		expect(link).toHaveAttribute('href', '/');
		expect(link.classList.contains('test')).toBe(true);
		expect(link).toBeInTheDocument();
	});

	it('Should render header link type', () => {
		const { getByText } = renderPage(LinkType.HeaderLink, linkTo);
		const link = getByText('Test Link');

		expect(link).toHaveAttribute('href', `/${linkTo}`);
		expect(link.classList.contains('test')).toBe(true);
		expect(link).toBeInTheDocument();
	});

	it('Should have / in header link in case of undefined', () => {
		const { getByText } = renderPage(LinkType.HeaderLink, undefined);
		const link = getByText('Test Link');

		expect(link).toHaveAttribute('href', '/');
		expect(link.classList.contains('test')).toBe(true);
		expect(link).toBeInTheDocument();
	});

	it('Should render normal link type', () => {
		const { getByText } = renderPage(LinkType.Normal, linkTo);
		const link = getByText('Test Link');

		expect(link).toHaveAttribute('href', linkTo);
		expect(link.classList.contains('test')).toBe(true);
		expect(link).toBeInTheDocument();
	});

	it('Should render normal blue link type', () => {
		const { getByText } = renderPage(LinkType.NormalBlue, linkTo);
		const link = getByText('Test Link');

		expect(link).toHaveAttribute('href', linkTo);
		expect(link.classList.contains('test')).toBe(true);
		expect(link).toBeInTheDocument();
	});

	it('Should return null in case of wrong type', () => {
		const { container } = renderPage('nothing' as LinkType, linkTo);

		expect(container.firstChild).toBeNull();
	});
});
