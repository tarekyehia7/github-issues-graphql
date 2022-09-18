import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';

import { Header } from './Header';
import { PageWithTheme } from '../../../helpers/testing/helpers';
import { constants } from '../../../constants';

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

	it('Should have correct links', () => {
		const { githubUrl, repository, projectName } = constants;
		const { getAllByRole } = render(<HeaderWithTheme />);
		const links = getAllByRole('link');

		expect(links).toHaveLength(3);
		expect(links[0]).toHaveAttribute('href', `${githubUrl}/${repository}`);
		expect(links[1]).toHaveAttribute('href', `${githubUrl}/${repository}/${projectName}`);
		expect(links[2]).toHaveAttribute('href', `/`);
	});
});
