import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';

import { ReposHeaderLinks } from './ReposHeaderLinks';
import { PageWithTheme } from '../../../helpers/testing/helpers';
import { constants } from '../../../constants';

const ReposHeaderWithTheme = () => {
	return (
		<PageWithTheme>
			<ReposHeaderLinks />
		</PageWithTheme>
	);
};

describe('<RposHeaderLinks />', () => {
	it('Should match snapshot', () => {
		const { container } = render(<ReposHeaderWithTheme />);
		expect(container).toMatchSnapshot();
	});

	it('Should have correct links', () => {
		const { githubUrl, repository, projectName } = constants;
		const { getAllByRole } = render(<ReposHeaderWithTheme />);
		const links = getAllByRole('link');

		expect(links).toHaveLength(2);
		expect(links[0]).toHaveAttribute('href', `${githubUrl}/${repository}`);
		expect(links[1]).toHaveAttribute('href', `${githubUrl}/${repository}/${projectName}`);
	});
});
