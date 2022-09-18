import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';

import { IssueBox, IssueBoxProps } from './IssueBox';
import { PageWithTheme } from '../../../helpers/testing/helpers';
import { IssueState } from '../../../graphql/generatedTypes/graphql';
import { formatDate } from '../../../helpers/helpers';
import { constants } from '../../../constants';

const props: IssueBoxProps = {
	state: IssueState.Open,
	title: 'Bug: <img/> renders twice in firefox with react 18',
	totalCount: 10,
	issueId: 25276,
	createdAt: '2022-09-09T13:25:28Z',
	authorName: 'tyehia',
	authorUrl: 'https://github.com/tarekyehia7',
};

const renderPage = (state = props.state) => {
	const { container, getByText, getByTestId } = render(
		<PageWithTheme>
			<IssueBox {...props} state={state} />
		</PageWithTheme>,
	);

	return {
		container,
		getByText,
		getByTestId,
	};
};

describe('<IssueBox />', () => {
	it('Should match snapshot', () => {
		const { container } = renderPage();
		expect(container).toMatchSnapshot();
	});

	it('Should have correct Title', () => {
		const { getByText } = renderPage();

		expect(getByText(props.title)).toBeInTheDocument();
	});

	it('Should have correct description', () => {
		const { getByText } = renderPage();

		expect(getByText(`#${props.issueId} Opened`)).toBeInTheDocument();
		expect(getByText(formatDate(props.createdAt))).toBeInTheDocument();
	});

	it('Should have correct open issue image', () => {
		const { getByTestId } = renderPage(IssueState.Open);

		expect(getByTestId('open-issue-icon')).toBeInTheDocument();
	});

	it('Should have correct skip issue image', () => {
		const { getByTestId } = renderPage(IssueState.Closed);

		expect(getByTestId('skip-issue-icon')).toBeInTheDocument();
	});

	it('Should have comments section', () => {
		const { repository, projectName } = constants;
		const { getByTestId } = renderPage();

		expect(getByTestId('comments-section')).toBeInTheDocument();
		expect(getByTestId('comments-section').firstChild?.lastChild).toHaveTextContent(
			`${props.totalCount}`,
		);
		expect(getByTestId('comments-section').firstChild).toHaveAttribute(
			'href',
			`/${repository}/${projectName}/issue/${props.issueId}`,
		);
	});
});
