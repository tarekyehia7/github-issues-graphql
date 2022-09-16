import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import renderer from 'react-test-renderer';

import { ReposHeader } from './ReposHeader';
import { PageWithTheme } from '../../../helpers/testing/helpers';
import { constants } from '../../../constants';

const ReposHeaderWithTheme = () => {
	return (
		<PageWithTheme>
			<ReposHeader />
		</PageWithTheme>
	);
};

describe('<IssueDetailsHeader />', () => {
	it('Should match snapshot', async () => {
		const domTree = await renderer.create(<ReposHeaderWithTheme />).toJSON();
		expect(domTree).toMatchSnapshot();
	});

	it('Should have correct links', async () => {
		const { githubUrl, repository, projectName } = constants;
		const { getAllByRole } = render(<ReposHeaderWithTheme />);
		const links = getAllByRole('link');

		expect(links).toHaveLength(3);
		expect(links[0]).toHaveAttribute('href', `${githubUrl}/${repository}`);
		expect(links[1]).toHaveAttribute('href', `${githubUrl}/${repository}/${projectName}`);
		expect(links[2]).toHaveAttribute('href', `/`);
	});
});
