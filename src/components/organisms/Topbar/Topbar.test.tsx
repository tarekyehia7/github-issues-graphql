import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';

import { Topbar } from './Topbar';
import { PageWithTheme } from '../../../helpers/testing/helpers';
import { constants } from '../../../constants';

const TopbarWithTheme = () => {
	return (
		<PageWithTheme>
			<Topbar />
		</PageWithTheme>
	);
};

describe('<Topbar />', () => {
	it('Should match snapshot', () => {
		const { container } = render(<TopbarWithTheme />);
		expect(container).toMatchSnapshot();
	});

	it('Should have correct links', () => {
		const { githubUrl, repository, projectName } = constants;
		const { getAllByRole } = render(<TopbarWithTheme />);
		const links = getAllByRole('link');

		expect(links).toHaveLength(3);
		expect(links[0]).toHaveAttribute('href', `${githubUrl}/${repository}`);
		expect(links[1]).toHaveAttribute('href', `${githubUrl}/${repository}/${projectName}`);
		expect(links[2]).toHaveAttribute('href', `/`);
	});
});
