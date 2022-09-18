import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { MockedProvider, MockedResponse } from '@apollo/client/testing';

import { IssuesPage } from './Issues';
import { issuesGraphQlMock, issuesGraphQlErrorMock } from '../../graphql/queries/mocks/issues.mock';
import { constants } from '../../constants';
import { PageWithTheme } from '../../helpers/testing/helpers';
import { getPagesNumber } from '../../helpers/helpers';

const renderPage = (mocks: MockedResponse<Record<string, unknown>>[]) => {
	const {
		container,
		getAllByTestId,
		getByTestId,
		findByText,
		findByPlaceholderText,
		getByPlaceholderText,
		getAllByText,
		getByText,
	} = render(
		<PageWithTheme>
			<MockedProvider mocks={mocks} addTypename={true}>
				<IssuesPage />
			</MockedProvider>
		</PageWithTheme>,
	);
	return {
		container,
		getAllByTestId,
		getByTestId,
		findByText,
		findByPlaceholderText,
		getByPlaceholderText,
		getAllByText,
		getByText,
	};
};

describe('<Issues />', () => {
	it('Should render Issues Page with skeleton and cursors', async () => {
		const { getAllByTestId, findByText, findByPlaceholderText } = renderPage([
			issuesGraphQlMock,
		]);

		expect(getAllByTestId('skeleton')).toHaveLength(constants.issuesPerPage);
		expect(getAllByTestId('skeleton')[0]).toBeInTheDocument();

		expect(await findByText('< Previous')).toBeInTheDocument();
		expect(await findByPlaceholderText('type here...')).toBeInTheDocument();
	});

	it('Should list all issues', async () => {
		const { getAllByText, getByText, getAllByTestId, getByTestId } = renderPage([
			issuesGraphQlMock,
		]);
		const firstNode = issuesGraphQlMock.result.data.search.edges[0].node;
		const lastNode = issuesGraphQlMock.result.data.search.edges[9].node;
		const edges = issuesGraphQlMock.result.data.search.edges;

		await waitFor(() => {
			expect(getAllByText(firstNode.title.trim())[0]).toBeInTheDocument();
			expect(getAllByText(firstNode.author.login)[0]).toBeInTheDocument();

			expect(getAllByTestId('issue-box-', { exact: false })).toHaveLength(
				constants.issuesPerPage,
			);

			edges.forEach(edge => {
				expect(getByTestId(`issue-box-${edge.node.number}`)).toBeInTheDocument();
				expect(getByText(edge.node.title)).toBeInTheDocument();
				if (edge.node.comments.totalCount > 0) {
					expect(
						getByTestId(`issue-box-${edge.node.number}`).firstChild?.lastChild,
					).toHaveAttribute('data-testid', 'comments-section');
				} else {
					expect(
						getByTestId(`issue-box-${edge.node.number}`).firstChild?.lastChild,
					).not.toHaveAttribute('data-testid', 'comments-section');
				}
				expect(getByText(`#${edge.node.number} Opened`)).toBeInTheDocument();
			});

			expect(getAllByText(lastNode.title)[0]).toBeInTheDocument();
			expect(getAllByText(lastNode.author.login)[0]).toBeInTheDocument();
		});
	});

	it('Should contain clear search if input changes', async () => {
		const { getAllByTestId, getByPlaceholderText, getByText } = renderPage([issuesGraphQlMock]);
		await waitFor(() => {
			const input = getByPlaceholderText('type here...');

			fireEvent.change(input, { target: { value: 'no results found 1234567890123' } });
			fireEvent.keyUp(input, { key: 'Enter' });

			// expect(mockUseState).toBeCalled();
			expect(getAllByTestId('skeleton')).toHaveLength(constants.issuesPerPage);
			expect(getByText('Clear current search query, filters, and sorts')).toBeInTheDocument();
		});
	});

	it('Should remove clear search and empty input after click', async () => {
		const { getByPlaceholderText, getByText } = renderPage([issuesGraphQlMock]);
		await waitFor(() => {
			const input = getByPlaceholderText('type here...');

			fireEvent.change(input, { target: { value: 'no results found 1234567890123' } });
			fireEvent.keyUp(input, { key: 'Enter' });

			const clearCurrentSearchButton = getByText(
				'Clear current search query, filters, and sorts',
			);

			fireEvent.click(clearCurrentSearchButton);
			expect(input).toHaveValue('');
		});
	});

	it('Should set page number + 1 after next > button click', async () => {
		const { getByText, getByTestId } = renderPage([issuesGraphQlMock]);
		const nextButton = getByText('Next >');
		const totalPages = getPagesNumber(
			issuesGraphQlMock.result.data.search.issueCount,
			constants.issuesPerPage,
		);

		await waitFor(() => new Promise(res => setTimeout(res, 500)));
		fireEvent.click(nextButton);
		expect(getByTestId('pages-info').textContent).toBe(`Page 2 of ${totalPages}`);
	});

	it('Should set page number 1 1 after Previous > button click', async () => {
		const { getByText, getByTestId } = renderPage([issuesGraphQlMock]);
		const nextButton = getByText('Next >');
		const previousButton = getByText('< Previous');
		const totalPages = getPagesNumber(
			issuesGraphQlMock.result.data.search.issueCount,
			constants.issuesPerPage,
		);

		await waitFor(() => new Promise(res => setTimeout(res, 500)));
		fireEvent.click(nextButton);
		fireEvent.click(nextButton);

		fireEvent.click(previousButton);
		expect(getByTestId('pages-info').textContent).toBe(`Page 2 of ${totalPages}`);
	});

	it('Should match snapshot', async () => {
		const { container } = renderPage([issuesGraphQlMock]);

		await waitFor(() => new Promise(res => setTimeout(res, 500)));
		expect(container).toMatchSnapshot();
	});

	it('Should render no results', async () => {
		const { getByText } = renderPage([]);

		await waitFor(() => {
			expect(getByText('No results matched your search.')).toBeInTheDocument();
		});
	});

	it('Should render no results in case of error', async () => {
		const { getByText } = renderPage([issuesGraphQlErrorMock]);

		await waitFor(() => {
			expect(getByText('No results matched your search.')).toBeInTheDocument();
		});
	});
});
