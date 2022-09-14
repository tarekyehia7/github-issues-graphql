import React, { useEffect, useState } from 'react';

import { useGetIssuesLazyQuery } from '../../graphql/generatedTypes/graphql';
import { buildQuery } from '../../helpers/queryBuilder';
import { Skeleton } from '../../components/skeleton/Skeleton';
import { NoResults } from '../../components/NoResults/NoResults';
import { getPagesNumber } from '../../helpers/helpers';
import Cursors from '../../components/Cursors/Cursors';
import { FilterInput } from '../../components/FilterInput/FilterInput';
import { StateToggler } from '../../components/stateToggler/StateToggler';
import styled from 'styled-components';
import { IssueBox } from '../../components/issueBox/IssueBox';
import { QueryType, StatusEnum } from '../../types/issues';
import { constants } from '../../constants';

export const DEFAULT_GITHUB_QUERY_BUILDER: QueryType = {
	repo: `${constants.repository}/${constants.projectName}`,
	is: 'issue',
	status: StatusEnum.open,
	in: constants.searchTerm,
	input: '',
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
	margin-right: 0;
	margin-left: 0;
	border: 1px solid #d0d7de;
	border-radius: 6px;
    div:first-of-type {
        border-top: none;
    }
`;

export const IssuesPage = () => {
	const [githubQuery, setGithubQuery] = useState(DEFAULT_GITHUB_QUERY_BUILDER);
	const [totalPages, setTotalPages] = useState(1);
	const [pageNumber, setPageNumber] = useState(1);
	const [inputText, setInputText] = useState('');
	const [getIssues, { data, error, loading }] = useGetIssuesLazyQuery({
		fetchPolicy: 'network-only',
	});

    const { issuesPerPage } = constants;
	const hasData = data?.search?.edges && data?.search?.edges.length > 0;
	const issues = data?.search?.edges;

	useEffect(() => {
		const query = buildQuery(githubQuery);

		getIssues({
			variables: {
				query,
				first: issuesPerPage,
			},
		});
	}, [githubQuery]);

	useEffect(() => {
		if (!loading) {
			const number = data?.search ? getPagesNumber(data?.search?.issueCount, issuesPerPage) : 1;
			setTotalPages(number);
		}
	}, [data]);

	const inputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputText(e.target.value.replaceAll(':', ''));
	};

	const inputOnKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			setGithubQuery({ ...githubQuery, input: inputText });
			setPageNumber(1);
		}
	};

	const updateQueryStatus = (status: StatusEnum) => {
		setPageNumber(1);
		setGithubQuery({ ...githubQuery, status });
	};

	const loadPreviousData = () => {
		const query = buildQuery(githubQuery);
		const startCursor = data?.search.edges && data?.search?.edges[0]?.cursor;

		setPageNumber(pageNumber - 1);
		getIssues({
			variables: {
				query,
				last: issuesPerPage,
				before: startCursor,
			},
		});
	};

	const loadNextData = () => {
		const query = buildQuery(githubQuery);
		const endCursor =
			data?.search.edges && data?.search?.edges[data.search.edges.length - 1]?.cursor;

		setPageNumber(pageNumber + 1);
		getIssues({
			variables: {
				query,
				first: issuesPerPage,
				after: endCursor,
			},
		});
	};

	const clearSearchHistory = () => {
		setInputText('');
		setGithubQuery({ ...githubQuery, input: '' });
	};
    
	return (
		<>
			<FilterInput
				value={inputText}
				onKeyUp={inputOnKeyUp}
				onChange={inputOnChange}
				onClearSearchHistoryClick={clearSearchHistory}
				showClearHistoryText={githubQuery.input.length > 0}
			/>
			<StateToggler status={githubQuery.status} onStateClick={updateQueryStatus} />
			{loading && (
				<Container>
					{[...Array(issuesPerPage)].map(idx => (
						<Skeleton key={idx} />
					))}
				</Container>
			)}
			{hasData && (
				<Container>
					{issues &&
						issues.map((edges, idx) => {
							if (edges?.node?.__typename === 'Issue') {
								const node = edges?.node;

								return (
									<IssueBox
										key={`issue-box-${idx}`}
										state={node.state}
										title={node.title}
										totalCount={node.comments.totalCount}
										issueId={node.number}
										createdAt={node.createdAt}
										authorName={node.author?.login ?? ''}
										authorUrl={node.author?.url}
									/>
								);
							}
							return null;
						})}
				</Container>
			)}
			{(!hasData || error) && !loading && (
				<Container>
					<NoResults />
				</Container>
			)}
			<Cursors
				loadPreviousData={loadPreviousData}
				loadNextData={loadNextData}
				previousButtonDisabled={!data?.search.pageInfo.hasPreviousPage}
				nextButtonDisabled={!data?.search.pageInfo.hasNextPage}
				pageNumber={pageNumber}
				totalPages={totalPages}
			/>
		</>
	);
};
