import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict';
import React from 'react';
import styled from 'styled-components';
import { IssueState } from '../../graphql/generatedTypes/graphql';
import { OpenIssueIcon } from '../../icons/OpenIssueIcon';
import { SkipIcon } from '../../icons/SkipIcon';

const TitleContainer = styled.div`
    font-weight: 400;
    padding-bottom: 3rem;
    border-bottom: 1px solid #d0d7de;
`;

const BigTitle = styled.h1`
`;

const Description = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const Status = styled.span<{ isOpenState: boolean }>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: ${({ isOpenState }) => isOpenState ? '4rem' : '5rem'};
    border: 1px solid transparent;
    color: #ffffff;
    padding: 5px 12px;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    text-align: center;
    white-space: nowrap;
    border-radius: 2em;
    background-color: ${({ isOpenState }) => isOpenState ? '#fa4549' : '#6e7781'};
    svg {
        fill: #ffffff
    }
`;

type IssueHeaderProps = {
    title: string;
    issueId: string;
    state: IssueState;
    authorName: string;
    createdAt: string;
};

export const IssueDetailsHeader = ({
    title,
    issueId,
    state,
    authorName,
    createdAt
}: IssueHeaderProps) => (
    <TitleContainer>
        <BigTitle>{title} #{issueId}</BigTitle>
        <Description>
            <Status isOpenState={state === IssueState.Open}>
                {state === IssueState.Open ?
                    <OpenIssueIcon />
                    :
                    <SkipIcon />
                }
                {state} 
            </Status>
            {authorName} opened this issue {formatDistanceToNowStrict(new Date(createdAt))} ago
        </Description>
    </TitleContainer>
);