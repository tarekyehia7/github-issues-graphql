import React, { useCallback, useEffect, useState } from 'react';
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

const CursorLink = styled.button`
    color: #0969da;
    min-width: 32px;
    padding: 5px 10px;
    font-style: normal;
    line-height: 20px;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    border-radius: 6px;
    transition: border-color .2s cubic-bezier(0.3, 0, 0.5, 1);
    background-color: transparent;
    &:disabled {
        color: #8c959f;
        cursor: default;
        border-color: transparent;
        &: hover {
            border-color: transparent;
        }
    }
    &:hover {
        text-decoration: none;
        border-color: #d0d7de;
        transition-duration: .1s;
    }
`;

const LinksContainer = styled.div`
    display: flex;
    padding: 1rem;
    justify-content: space-evenly;
    align-items: center;
`;

export const IssuesPage = () => {
    const [githubQuery, setGithubQuery] = useState(DEFAULT_GITHUB_QUERY_BUILDER);
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

    const getTotalPage = useCallback(() => {
        return data?.search ? getPagesNumber(data?.search?.issueCount, 10) : 0;
    }, []);

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
                <Issues data={data} />
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
            <LinksContainer>
                <CursorLink
                    onClick={loadPreviousData}
                    disabled={!data?.search.pageInfo.hasPreviousPage}
                >
                    {`< Previous`}
                </CursorLink>
                <div>
                    Page {pageNumber} of {getTotalPage()}
                </div>
                <CursorLink
                    onClick={loadNextData}
                    disabled={!data?.search.pageInfo.hasNextPage}
                >
                    {`Next >`}
                </CursorLink>
            </LinksContainer>
        </>
    );
};