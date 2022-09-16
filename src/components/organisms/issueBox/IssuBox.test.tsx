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
const IssueBoxWithTheme = () => {
	return (
		<PageWithTheme>
			<IssueBox {...props} />
		</PageWithTheme>
	);
};

describe('<IssueBox />', () => {
	it('Should match snapshot', async () => {
		// const domTree = await renderer.create(<IssueBoxWithTheme />).toJSON();
        const { container } = render(<IssueBoxWithTheme />);
		expect(container).toMatchSnapshot();
	});

	it('Should have correct Title', async () => {
		const { getByText } = render(<IssueBoxWithTheme />);

		expect(getByText(props.title)).toBeInTheDocument();
	});

	it('Should have correct description', async () => {
		const { getByText } = render(<IssueBoxWithTheme />);

		expect(getByText(`#${props.issueId} Opened`)).toBeInTheDocument();
		expect(getByText(formatDate(props.createdAt))).toBeInTheDocument();
	});

	it('Should have comments section', async () => {
		const { repository, projectName } = constants;
		const { getByTestId } = render(<IssueBoxWithTheme />);

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
