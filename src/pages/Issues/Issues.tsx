import React, { useEffect, useState } from 'react';

import { useGetIssuesLazyQuery } from '../../graphql/generatedTypes/graphql';
import { Issues } from '../../components/header/Issues';
import { buildQuery } from '../../helpers/queryBuilder';
import { Skeleton } from '../../components/atoms/skeleton/Skeleton';
import { Container } from '../../components/header/Issues';
import { NoResults } from '../../components/atoms/NoResults/NoResults';
import { getPagesNumber } from '../../helpers/helpers';
import Cursors from '../../components/Cursors/Cursors';
import { FilterInput } from '../../components/FilterInput/FilterInput';
import { StateToggler } from '../../components/stateToggler/StateToggler';

export enum StatusEnum {
    all = 'is:all',
    open = 'is:open',
    closed = 'is:closed'
}

export type QueryType = {
    repo: string;
    is: string;
    status: StatusEnum;
    in: string;
    input: string;
}

const DEFAULT_GITHUB_QUERY_BUILDER: QueryType = {
    repo: 'facebook/react',
    is: 'issue',
    status: StatusEnum.open,
    in: 'title,body',
    input: ''
}

export const IssuesPage = () => {
    const [githubQuery, setGithubQuery] = useState(DEFAULT_GITHUB_QUERY_BUILDER);
    const [totalPages, setTotalPages] = useState(1);
    const [pageNumber, setPageNumber] = useState(1);
    const [inputText, setInputText] = useState('');
    const [getIssues, { data, error, loading }] = useGetIssuesLazyQuery({
        fetchPolicy: 'network-only'
    });

    const hasData = data?.search?.edges && data?.search?.edges.length > 0;

    useEffect(() => {
        const query = buildQuery(githubQuery);
        
        getIssues({
            variables: {
                query,
                first: 10,
            }
        });
    }, [githubQuery]);

    useEffect(() => {
        if (!loading) {
            const number = data?.search ? getPagesNumber(data?.search?.issueCount, 10) : 1;
            setTotalPages(number);
        }
    }, [data]);

    const inputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value.replaceAll(':', ''));
    };

    const inputOnKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            setGithubQuery({...githubQuery, input: inputText})
            setPageNumber(1);
        }
    };

    const updateQueryStatus = (status: StatusEnum) => {
        setPageNumber(1);
        setGithubQuery({...githubQuery, status});
    };

    const loadPreviousData = () => {
        const query = buildQuery(githubQuery);
        const startCursor = data?.search.edges && data?.search?.edges[0]?.cursor;

        setPageNumber(pageNumber - 1);
        getIssues({
            variables: {
                query,
                last: 10,
                before: startCursor
            }
        })
    };

    const loadNextData = () => {
        const query = buildQuery(githubQuery);
        const endCursor = data?.search.edges && data?.search?.edges[data.search.edges.length - 1]?.cursor;
        setPageNumber(pageNumber + 1);
        getIssues({
            variables: {
                query,
                first: 10,
                after: endCursor
            }
        })
    };

    const clearSearchHistory = () => {
        setInputText('');
        setGithubQuery({...githubQuery, input: ''});
    };

    if (loading) {
        return (
            <Container>
                {[...Array(10)].map((idx) => (
                    <Skeleton key={idx} />
                ))}
            </Container>
        );
    }

    return (
        <>
            <FilterInput
                value={inputText}
                onKeyUp={inputOnKeyUp}
                onChange={inputOnChange}
                onClearSearchHistoryClick={clearSearchHistory}
                showClearHistoryText={githubQuery.input.length > 0}
            />
            <StateToggler
                status={githubQuery.status}
                onStateClick={updateQueryStatus}
            />
            {hasData &&
                <Issues data={data} />
            }
            {(!hasData || error) && !loading && 
                <Container>
                    <NoResults />
                </Container>
            }
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