import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MockedProvider } from '@apollo/client/testing';

import { IssuePage } from './Issue';
import { theme } from '../../themes';
import { issueGraphQlMock } from '../../graphql/queries/mocks/issue.mock';

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useParams: () => ({
		issueId: '25264',
	}),
}));

const repositoryIssue = issueGraphQlMock.result.data.repository.issue;
const repositoryEdges = issueGraphQlMock.result.data.repository.issue.comments.edges;

const renderPage = () => {
	render(
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<MockedProvider mocks={[issueGraphQlMock]} addTypename={true}>
					<IssuePage />
				</MockedProvider>
			</ThemeProvider>
		</BrowserRouter>,
	);
};

beforeEach(() => renderPage());

it('should render Issue Page', async () => {
	await waitFor(() => {
		expect(screen.getByText(repositoryIssue.title)).toBeInTheDocument();

		expect(screen.getAllByAltText('avatar url')[1]).toHaveAttribute(
			'src',
			repositoryEdges[0].node.author.avatarUrl,
		);
	});
});
