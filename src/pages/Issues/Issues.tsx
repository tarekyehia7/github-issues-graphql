import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { useGetIssuesLazyQuery } from '../../graphql/generatedTypes/graphql';
import { Issues } from '../../components/header/Issues';
import { buildQuery } from '../../helpers/queryBuilder';
import { OpenIssueIcon } from '../../icons/OpenIssueIcon';
import { CorrectIcon } from '../../icons/CorrectIcon';
import { SearchIcon } from '../../icons/SearchIcon';
import { Skeleton } from '../../components/atoms/skeleton/Skeleton';
import { Container } from '../../components/header/Issues';
import { NoResults } from '../../components/atoms/NoResults/NoResults';
import { getPagesNumber } from '../../helpers/helpers';
import Cursors from '../../components/Cursors/Cursors';
import { CloseIcon } from '../../icons/CloseIcon';

export enum StatusEnum {
    all = 'is:all',
    open = 'is:open',
    closed = 'is:closed'
}

const DEFAULT_GITHUB_QUERY_BUILDER = {
    repo: 'facebook/react',
    is: 'issue',
    status: StatusEnum.open,
    in: 'title,body',
    input: ''
}

const Input = styled.input`
    padding: 5px 26px;
    font-size: 14px;
    line-height: 20px;
    vertical-align: middle;
    background-repeat: no-repeat;
    background-position: right 8px center;
    border: 1px solid #d0d7de;
    border-radius: 6px;
    outline: none;
    width: 100%;
    background-color: #f6f8fa;
    color: #57606a;
    box-shadow: inset 0 1px 0 rgba(208,215,222,0.2);
`;

const FilterContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding: 1rem;
`;

const Button = styled.button<{ currentTab: boolean}>`
    display: inline-flex;
    padding: 0.5rem;
    font-size: inherit;
    color: black;
    text-decoration: none;
    white-space: nowrap;
    cursor: pointer;
    -webkit-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 0;
    -webkit-appearance: none;
    appearance: none;
    color: ${({ currentTab }) => currentTab ? '#24292f' : '#57606a'};
    ${({ currentTab }) => currentTab && 'font-weight: bold;'}
`;

const SearchIconStyled = styled(SearchIcon)`
    position: absolute;
    display: block;
    color: #57606a;
    text-align: center;
    pointer-events: none;
    fill: #ffffff;
    stroke-width: 0.1rem;
    stroke: #57606a;
    margin-left: 0.3rem;
`;

const OpenIssueIconStyled = styled(OpenIssueIcon)<{ currentTab: boolean }>`
    fill: ${({ currentTab }) => currentTab ? '#24292f' : '#57606a'};
    margin-right: 0.5rem;
`;

const CorrectIconStyled = styled(CorrectIcon)<{ currentTab: boolean }>`
    fill: ${({ currentTab }) => currentTab ? '#24292f' : '#57606a'};
    margin-right: 0.5rem;
`;

const CloseIconStyled = styled(CloseIcon)`
    width: 18px;
    height: 18px;
    padding: 1px;
    margin-right: 4px;
    fill: #ffffff;
    text-align: center;
    background-color: #6e7781;
    border-radius: 6px;
`;

const ClearSearchContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    font-weight: 600;
    color: #57606a;
    padding-top: 1rem;
    &:hover {
        color: #0969da;
        text-decoration: none;
        ${CloseIconStyled} {
            background: #0969da;
        }
    }
`;

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

    useEffect(() => {
        if (!loading) {
            const number = data?.search ? getPagesNumber(data?.search?.issueCount, 10) : 1;
            setTotalPages(number);
        }
    }, [data]);

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

    if (error) {
        return <NoResults />
    }

    return (
        <>
            <FilterContainer>
                <Input
                    value={inputText}
                    onKeyUp={inputOnKeyUp}
                    onChange={inputOnChange}
                />
                <SearchIconStyled />
            </FilterContainer>
            {githubQuery.input && 
                <ClearSearchContainer onClick={clearSearchHistory}>
                    <CloseIconStyled /> Clear current search query, filters, and sorts
                </ClearSearchContainer>
            }
            <ButtonsContainer>
                <Button
                    currentTab={githubQuery.status === StatusEnum.open}
                    onClick={() =>updateQueryStatus(StatusEnum.open)}
                >
                    <OpenIssueIconStyled currentTab={githubQuery.status === StatusEnum.open}/>
                    Open
                </Button>
                <Button
                    currentTab={githubQuery.status === StatusEnum.closed}
                    onClick={() => updateQueryStatus(StatusEnum.closed)}
                >
                    <CorrectIconStyled  currentTab={githubQuery.status === StatusEnum.closed}/>
                    Closed
                </Button>
            </ButtonsContainer>
            {hasData &&
                <>
                    <Issues data={data} />
                </>
            }
            {!hasData && !loading && 
                <Container>
                    <NoResults />
                </Container>
            }
            {loading && 
                <Container>
                    {[...Array(10)].map((idx) => (
                        <Skeleton key={idx} />
                    ))}
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