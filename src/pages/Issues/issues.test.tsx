import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MockedProvider } from '@apollo/client/testing';

import { IssuesPage } from './Issues';
import { theme } from '../../themes';
import { issuesGraphQlMock } from '../../graphql/queries/mocks/issues.mock';
import { constants } from '../../constants';

const renderPage = () => {
	render(
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<MockedProvider mocks={[issuesGraphQlMock]} addTypename={true}>
					<IssuesPage />
				</MockedProvider>
			</ThemeProvider>
		</BrowserRouter>,
	);
};

beforeEach(() => renderPage());

it('should render Issues Page', async () => {
	expect(screen.getAllByTestId('skeleton')).toHaveLength(constants.issuesPerPage);
	expect(screen.getAllByTestId('skeleton')[0]).toBeInTheDocument();

	expect(await screen.findByText('< Previous')).toBeInTheDocument();
	expect(await screen.findByPlaceholderText('type here...')).toBeInTheDocument();
});

it('should list all issues', async () => {
	const firstNode = issuesGraphQlMock.result.data.search.edges[0].node;
	const lastNode = issuesGraphQlMock.result.data.search.edges[9].node;

	await waitFor(() => {
		expect(screen.getByText(firstNode.title)).toBeInTheDocument();
		expect(screen.getByText(firstNode.author.login)).toBeInTheDocument();

		expect(screen.getByText(lastNode.title)).toBeInTheDocument();
		expect(screen.getByText(lastNode.author.login)).toBeInTheDocument();
	});
});

it('should contain clear search if input changes', async () => {
	await waitFor(() => {
		const input = screen.getByPlaceholderText('type here...');

		fireEvent.change(input, { target: { value: 'no results found 1234567890123' } });
		fireEvent.keyUp(input, { key: 'Enter' });

		expect(
			screen.getByText('Clear current search query, filters, and sorts'),
		).toBeInTheDocument();
	});
});
