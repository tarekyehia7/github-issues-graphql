import React, { useEffect, useState } from 'react';

import { useGetIssuesLazyQuery } from '../../graphql/generatedTypes/graphql';
import { buildQuery } from '../../helpers/queryBuilder';
import { Skeleton } from '../../components/atoms/skeleton/Skeleton';
import { NoResults } from '../../components/organisms/NoResults/NoResults';
import { getPagesNumber } from '../../helpers/helpers';
import Cursors from '../../components/molecules/Cursors/Cursors';
import { FilterInput } from '../../components/molecules/FilterInput/FilterInput';
import { StateToggler } from '../../components/molecules/stateToggler/StateToggler';
import { IssueBox } from '../../components/organisms/issueBox/IssueBox';
import { QueryType, StatusEnum } from '../../types/issues';
import { constants } from '../../constants';
import { Card, CardType } from '../../components/molecules/Card/Card';

export const DEFAULT_GITHUB_QUERY_BUILDER: QueryType = {
	repo: `${constants.repository}/${constants.projectName}`,
	is: 'issue',
	status: StatusEnum.open,
	in: constants.searchTerm,
	input: '',
};

export const IssuesPage = () => {
	const [githubQuery, setGithubQuery] = useState(DEFAULT_GITHUB_QUERY_BUILDER);
	const [totalPages, setTotalPages] = useState(1);
	const [pageNumber, setPageNumber] = useState(1);
	const [inputText, setInputText] = useState('');
	const [getIssues, { data, error, loading }] = useGetIssuesLazyQuery({
		fetchPolicy: 'cache-and-network',
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
			const number = data?.search
				? getPagesNumber(data?.search?.issueCount, issuesPerPage)
				: 1;
			setTotalPages(number);
		}
	}, [loading]);

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
		if (githubQuery.status !== status) {
			setPageNumber(1);
			setGithubQuery({ ...githubQuery, status });
		}
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
			<Card
				type={CardType.Normal}
				title={
					<StateToggler status={githubQuery.status} onStateClick={updateQueryStatus} />
				}
			>
				{loading &&
					[...Array(issuesPerPage - 1)].map((_, idx) => <Skeleton key={`skeleton-${idx}`} />)}
				{hasData &&
					issues &&
					issues.map(edges => {
						if (edges?.node?.__typename === 'Issue') {
							const node = edges?.node;

							return (
								<IssueBox
									key={`issue-box-${node.number}`}
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
				{(!hasData || error) && !loading && <NoResults />}
			</Card>
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
