import React from 'react';
import { cleanup, render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MockedProvider, MockedResponse } from '@apollo/client/testing';
import 'jest-styled-components';
import Router from 'react-router-dom';

import { IssuePage } from './Issue';
import { issueGraphQlErrorMock, issueGraphQlMock } from '../../graphql/queries/mocks/issue.mock';
import { PageWithThemeOnly } from '../../helpers/testing/helpers';
import { formatDate } from '../../helpers/helpers';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useParams: () => ({ issueId: '25264' }),
	useNavigate: () => mockedUsedNavigate,
}));

const repositoryIssue = issueGraphQlMock.result.data.repository.issue;
const repositoryEdges = issueGraphQlMock.result.data.repository.issue.comments.edges;

const renderPage = (mocks: MockedResponse<Record<string, unknown>>[]) => {
	const { container, getByText, getAllByText, getAllByTestId, getAllByAltText } = render(
		<PageWithThemeOnly>
			<MockedProvider mocks={mocks} addTypename={true}>
				<IssuePage />
			</MockedProvider>
		</PageWithThemeOnly>,
	);

	return {
		container,
		getByText,
		getAllByText,
		getAllByTestId,
		getAllByAltText,
	};
};

describe('<Issue />', () => {
	afterEach(() => {
		cleanup();
	});

	it('Should matches snapshot', async () => {
		const { container } = renderPage([issueGraphQlMock]);

		await waitFor(() => new Promise(res => setTimeout(res, 500)));
		expect(container).toMatchSnapshot();
	});

	it('should have avatar', async () => {
		const { getByText, getAllByAltText } = renderPage([issueGraphQlMock]);

		await waitFor(() => {
			expect(getByText(repositoryIssue.title.trim())).toBeInTheDocument();

			expect(getAllByAltText('avatar url')[1]).toHaveAttribute(
				'src',
				repositoryEdges[0].node.author.avatarUrl,
			);
		});
	});

	it('Should have correct title - author comment', async () => {
		const { getAllByText } = renderPage([issueGraphQlMock]);
		const cardTitle = `commented ${formatDate(repositoryIssue.createdAt)}`;

		await waitFor(() => {
			expect(getAllByText(cardTitle.trim())[0]).toBeInTheDocument();
		});
	});

	it('Should have correct number of cards', async () => {
		const { getAllByTestId } = renderPage([issueGraphQlMock]);

		// increment by one because of first card is not represented as an edge
		const cardsLength = repositoryEdges.length + 1;

		await waitFor(() => {
			expect(getAllByTestId('card')).toHaveLength(cardsLength);
		});
	});

	it('Should navigate to home in case of error', async () => {
		renderPage([issueGraphQlErrorMock]);

		await waitFor(() => new Promise(res => setTimeout(res, 500)));
		expect(mockedUsedNavigate).toHaveBeenCalled();
		expect(mockedUsedNavigate).toHaveBeenCalledWith('/');
	});

	it('Should handle wrong params', () => {
		jest.spyOn(Router, 'useParams').mockReturnValue({ issueId: '' });
		renderPage([issueGraphQlMock]);

		expect(mockedUsedNavigate).toHaveBeenCalled();
		expect(mockedUsedNavigate).toHaveBeenCalledWith('/');
	});
});
