import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { MockedProvider } from '@apollo/client/testing';

import { IssuesPage } from './Issues';
import { issuesGraphQlMock } from '../../graphql/queries/mocks/issues.mock';
import { constants } from '../../constants';
import { PageWithTheme } from '../../helpers/testing/helpers';

const renderPage = (withMock = true) => {
	const {
		container,
		getAllByTestId,
		findByText,
		findByPlaceholderText,
		getByPlaceholderText,
		getAllByText,
		getByText,
	} = render(
		<PageWithTheme>
			<MockedProvider mocks={withMock ? [issuesGraphQlMock] : []} addTypename={true}>
				<IssuesPage />
			</MockedProvider>
		</PageWithTheme>,
	);
	return {
		container,
		getAllByTestId,
		findByText,
		findByPlaceholderText,
		getByPlaceholderText,
		getAllByText,
		getByText,
	};
};

describe('<Issues />', () => {
	it('should render Issues Page', async () => {
		const { getAllByTestId, findByText, findByPlaceholderText } = renderPage();

		expect(getAllByTestId('skeleton')).toHaveLength(constants.issuesPerPage - 1);
		expect(getAllByTestId('skeleton')[0]).toBeInTheDocument();

		expect(await findByText('< Previous')).toBeInTheDocument();
		expect(await findByPlaceholderText('type here...')).toBeInTheDocument();
	});

	it('should list all issues', async () => {
		const { getAllByText } = renderPage();
		const firstNode = issuesGraphQlMock.result.data.search.edges[0].node;
		const lastNode = issuesGraphQlMock.result.data.search.edges[9].node;

		await waitFor(() => {
			expect(getAllByText(firstNode.title.trim())[0]).toBeInTheDocument();
			expect(getAllByText(firstNode.author.login)[0]).toBeInTheDocument();

			expect(getAllByText(lastNode.title)[0]).toBeInTheDocument();
			expect(getAllByText(lastNode.author.login)[0]).toBeInTheDocument();
		});
	});

	it('should contain clear search if input changes', async () => {
		const { getByPlaceholderText, getByText } = renderPage();
		await waitFor(() => {
			const input = getByPlaceholderText('type here...');

			fireEvent.change(input, { target: { value: 'no results found 1234567890123' } });
			fireEvent.keyUp(input, { key: 'Enter' });

			expect(getByText('Clear current search query, filters, and sorts')).toBeInTheDocument();
		});
	});

	it('Should match snapshot', async () => {
		const { container } = renderPage();

		await waitFor(() => new Promise(res => setTimeout(res, 100)));
		expect(container).toMatchSnapshot();
	});

	it('Should render no results', async () => {
		const { getByText } = renderPage(false);

		await waitFor(() => {
			expect(getByText('No results matched your search.')).toBeInTheDocument();
		});
	});
});
