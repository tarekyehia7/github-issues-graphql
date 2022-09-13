import React from 'react';
import { ThemeProvider } from 'styled-components';
import { act, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { MockedProvider } from '@apollo/client/testing';

import { IssuesPage } from './Issues';
import { theme } from '../../themes';
import { issuesGraphQlMock } from '../../graphql/queries/mocks/issues.mock';
import { constants } from '../../helpers/constants';
import { BrowserRouter } from 'react-router-dom';

const mock = issuesGraphQlMock;

const renderPage = () => {
	render(
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <MockedProvider mocks={[mock]} addTypename={true}>
                    <IssuesPage />
                </MockedProvider>
            </ThemeProvider>
        </BrowserRouter>,
	);
};

beforeEach(() => renderPage());

it('should render Issues Page', async () => {
        expect(screen.getAllByTestId('skeleton')).toHaveLength(constants.issuesPerPage)
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