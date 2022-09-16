import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';

import { Link, LinkType } from './Link';
import { PageWithTheme } from '../../../helpers/testing/helpers';

const LinkWithTheme = ({ type }: { type: LinkType }) => {
	return (
		<PageWithTheme>
			<Link to={'http://github.com'} type={type}>
				Test Link
			</Link>
		</PageWithTheme>
	);
};

describe('<Link />', () => {
	it('Should render title link type', async () => {
		const { getByText } = render(<LinkWithTheme type={LinkType.Title} />);

		fireEvent.click(getByText('Test Link'));

		expect(getByText('Test Link')).toBeInTheDocument();
	});

	it('Should render header link type', async () => {
		const { getByText } = render(<LinkWithTheme type={LinkType.HeaderLink} />);

		fireEvent.click(getByText('Test Link'));

		expect(getByText('Test Link')).toBeInTheDocument();
	});

	it('Should render normal link type', async () => {
		const { getByText } = render(<LinkWithTheme type={LinkType.Normal} />);

		fireEvent.click(getByText('Test Link'));

		expect(getByText('Test Link')).toBeInTheDocument();
	});

	it('Should render normal blue link type', async () => {
		const { getByText } = render(<LinkWithTheme type={LinkType.NormalBlue} />);

		fireEvent.click(getByText('Test Link'));

		expect(getByText('Test Link')).toBeInTheDocument();
	});
});
