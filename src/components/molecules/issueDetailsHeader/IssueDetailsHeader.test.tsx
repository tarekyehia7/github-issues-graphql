import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';

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

const renderPage = (state = props.state) => {
	const { container, getByText, getByTestId } = render(
		<PageWithTheme>
			<IssueDetailsHeader {...props} state={state} />
		</PageWithTheme>,
	);

	return {
		container,
		getByText,
		getByTestId,
	};
};

describe('<IssueDetailsHeader />', () => {
	it('Should match snapshot', () => {
		const { container } = renderPage();
		expect(container).toMatchSnapshot();
	});

	it('Should have correct Title', () => {
		const { getByText } = renderPage();

		expect(getByText(props.title)).toBeInTheDocument();
		expect(getByText(`#${props.issueId}`)).toBeInTheDocument();
	});

	it('Should have correct description', () => {
		const { getByText } = renderPage();

		expect(
			getByText(`${props.authorName} opened this issue ${formatDate(props.createdAt)}`),
		).toBeInTheDocument();
	});

	it('Should have correct open issue image', () => {
		const { getByTestId } = renderPage(IssueState.Open);

		expect(getByTestId('open-issue-icon')).toBeInTheDocument();
	});

	it('Should have correct skip issue image', () => {
		const { getByTestId } = renderPage(IssueState.Closed);

		expect(getByTestId('skip-icon')).toBeInTheDocument();
	});
});
