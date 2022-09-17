import React from 'react';
import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MockedProvider } from '@apollo/client/testing';

import { IssuePage } from './Issue';
import { issueGraphQlMock } from '../../graphql/queries/mocks/issue.mock';
import { PageWithTheme } from '../../helpers/testing/helpers';
import { formatDate } from '../../helpers/helpers';

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useParams: () => ({
		issueId: '25264',
	}),
}));

const repositoryIssue = issueGraphQlMock.result.data.repository.issue;
const repositoryEdges = issueGraphQlMock.result.data.repository.issue.comments.edges;

const renderPage = () => {
	const {
        container,
        getByText,
        getAllByText,
        getAllByTestId,
        getAllByAltText,
    } = render(
		<PageWithTheme>
            <MockedProvider mocks={[issueGraphQlMock]} addTypename={true}>
                <IssuePage />
            </MockedProvider>
        </PageWithTheme>,
	);

    return {
        container,
        getByText,
        getAllByText,
        getAllByTestId,
        getAllByAltText
    };
};

describe('<Issue />', () => {

	it('Should matches snapshot', async () => {
        const { container } = renderPage();

        await waitFor(() => new Promise((res) => setTimeout(res, 100)));
		expect(container).toMatchSnapshot();
	});

	it('should have avatar', async () => {
        const { getByText, getAllByAltText } = renderPage();
		await waitFor(() => {
			expect(getByText(repositoryIssue.title.trim())).toBeInTheDocument();

			expect(getAllByAltText('avatar url')[1]).toHaveAttribute(
				'src',
				repositoryEdges[0].node.author.avatarUrl,
			);
		});
	});

    it('Should have correct title - author comment', async () => {
        const { getAllByText } = renderPage();
        const cardTitle = `commented ${formatDate(repositoryIssue.createdAt)} ago`;

        await waitFor(() => {
			expect(getAllByText(cardTitle.trim())[0]).toBeInTheDocument();
		});
    });
    
    it('Should have correct number of cards', async () => {
        const { getAllByTestId } = renderPage();

        // increment by one because of first card is not represented as an edge
        const cardsLength = repositoryEdges.length + 1;

        await waitFor(() => {
            expect(getAllByTestId('card')).toHaveLength(cardsLength);
        });
    });

});
