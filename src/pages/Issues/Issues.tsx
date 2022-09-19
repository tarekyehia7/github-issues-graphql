import React, { useCallback, useEffect, useState } from 'react';

import { useGetIssuesLazyQuery } from '../../graphql/generatedTypes/graphql';
import { buildQuery } from '../../helpers/queryBuilder';
import { Skeleton } from '../../components/atoms/skeleton/Skeleton';
import { NoResults } from '../../components/molecules/NoResults/NoResults';
import { getPagesNumber } from '../../helpers/helpers';
import { Cursors } from '../../components/molecules/Cursors/Cursors';
import { FilterInput } from '../../components/molecules/FilterInput/FilterInput';
import { StateToggler } from '../../components/molecules/stateToggler/StateToggler';
import { IssueBox } from '../../components/molecules/issueBox/IssueBox';
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
	const [getIssues, { data, error, loading }] = useGetIssuesLazyQuery();

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
	}, [data]);

	const updateQueryStatus = useCallback(
		(status: StatusEnum) => {
			if (githubQuery.status !== status) {
				setPageNumber(1);
				setGithubQuery(prev => ({ ...prev, status: status }));
			}
		},
		[githubQuery.status],
	);

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

	const setGithubQueryInputText = useCallback(
		(inputText: string, setPageNum: boolean) => {
			setGithubQuery({ ...githubQuery, input: inputText });
			if (setPageNum) {
				setPageNumber(1);
			}
		},
		[githubQuery.input],
	);

	return (
		<>
			<FilterInput setGithubQuery={setGithubQueryInputText} />
			<Card
				type={CardType.Normal}
				title={
					<StateToggler status={githubQuery.status} onStateClick={updateQueryStatus} />
				}
			>
				{loading &&
					[...Array(issuesPerPage)].map((_, idx) => <Skeleton key={`skeleton-${idx}`} />)}
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
