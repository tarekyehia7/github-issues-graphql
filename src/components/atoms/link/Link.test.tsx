import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import { Link, LinkType } from './Link';
import { PageWithTheme } from '../../../helpers/testing/helpers';

const renderPage = (type: LinkType) => {
	const {
        getByText
    } = render(
		<PageWithTheme>
			<Link to={'http://github.com'} type={type}>
				Test Link
			</Link>
		</PageWithTheme>
	);
    return {
        getByText
    };
};

describe('<Link />', () => {
	it('Should render title link type', async () => {
		const { getByText } = renderPage(LinkType.Title);

		fireEvent.click(getByText('Test Link'));

		expect(getByText('Test Link')).toBeInTheDocument();
	});

	it('Should render header link type', async () => {
		const { getByText } = renderPage(LinkType.HeaderLink);

		fireEvent.click(getByText('Test Link'));

		expect(getByText('Test Link')).toBeInTheDocument();
	});

	it('Should render normal link type', async () => {
		const { getByText } = renderPage(LinkType.Normal);

		fireEvent.click(getByText('Test Link'));

		expect(getByText('Test Link')).toBeInTheDocument();
	});

	it('Should render normal blue link type', async () => {
		const { getByText } = renderPage(LinkType.NormalBlue);

		fireEvent.click(getByText('Test Link'));

		expect(getByText('Test Link')).toBeInTheDocument();
	});
});
