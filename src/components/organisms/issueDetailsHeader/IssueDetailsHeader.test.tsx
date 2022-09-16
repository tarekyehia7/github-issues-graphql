import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import renderer from 'react-test-renderer';

import { IssueDetailsHeader, IssueHeaderProps } from './IssueDetailsHeader';
import { PageWithTheme } from '../../../helpers/testing/helpers';
import { IssueState } from '../../../graphql/generatedTypes/graphql';
import { formatDate } from '../../../helpers/helpers';

const props: IssueHeaderProps = {
	state: IssueState.Open,
	title: 'Bug: <img/> renders twice in firefox with react 18',
	issueId: '25276',
	createdAt: '2022-09-09T13:25:28Z',
	authorName: 'tyehia',
};

const IssueHeaderWithTheme = () => {
	return (
		<PageWithTheme>
			<IssueDetailsHeader {...props} />
		</PageWithTheme>
	);
};

describe('<IssueDetailsHeader />', () => {
	it('Should match snapshot', async () => {
		const domTree = await renderer.create(<IssueHeaderWithTheme />).toJSON();
		expect(domTree).toMatchSnapshot();
	});

	it('Should have correct Title', async () => {
		const { getByText } = render(<IssueHeaderWithTheme />);

		expect(getByText(props.title)).toBeInTheDocument();
		expect(getByText(`#${props.issueId}`)).toBeInTheDocument();
	});

	it('Should have correct description', async () => {
		const { getByText } = render(<IssueHeaderWithTheme />);

		expect(
			getByText(`${props.authorName} opened this issue ${formatDate(props.createdAt)} ago`),
		).toBeInTheDocument();
	});
});
