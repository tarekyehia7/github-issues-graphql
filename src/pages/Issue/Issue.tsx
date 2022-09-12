import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';

import { IssueState, useGetIssueQuery } from '../../graphql/generatedTypes/graphql';
import { OpenIssueIcon } from '../../icons/OpenIssueIcon';
import { SkipIcon } from '../../icons/SkipIcon';

const Box = styled.div`
    color: #24292f;
    background-color: #ffffff;
    border: 1px solid #d0d7de;
    border-radius: 6px;
    margin-bottom: 1rem;
    position: relative;
    margin: 4rem;
    &:before {
        position: absolute;
        top: 11px;
        right: 100%;
        left: -8px;
        display: block;
        width: 8px;
        height: 16px;
        pointer-events: none;
        content: " ";
        clip-path: polygon(0 50%, 100% 0, 100% 100%);
        background-color: #d0d7de;
    }
`;

const Title = styled.div`
    display: flex;
    align-items: center;
    padding: 1rem;
    color: #57606a;
    background-color: #f6f8fa;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
`;

const Body = styled.div`
    padding: 16px;
    font-size: 14px;
    color: black;
`;

const AvatarImg = styled.img`
    position: absolute;
    left: -53px;
    display: inline-block;
    overflow: hidden;
    line-height: 1;
    vertical-align: middle;
    background-color: #ffffff;
    border-radius: 6px;
    flex-shrink: 0;
    box-shadow: 0 0 0 1px #1b1f2426;
    border-radius: 50% !important;
    width: 2.5rem;
    height: 2.5rem;
`;

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

const LinkStyled = styled(Link)`
    position: relative;
    text-decoration: none;
    font-weight: 600;
    color: #24292f;
    border-bottom-color: #fd8c73;
    display: flex;
    padding: 0 8px;
    font-size: 14px;
    line-height: 30px;
    color: #24292f;
    text-align: center;
    white-space: nowrap;
    cursor: pointer;
    background-color: transparent;
    border: 0;
    border-radius: 6px;
    align-items: center;
    &:after {
        position: absolute;
        right: 50%;
        bottom: calc(50% - 25px);
        width: 4rem;
        height: 2px;
        content: "";
        background: #fd8c73;
        border-radius: 6px;
        transform: translate(50%, -50%);
    }
`;

const LinkContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export const Issue = () => {
    const { issueId } = useParams()
    const { data, error, loading} = useGetIssueQuery({
        variables: {
            issueId: issueId ? parseInt(issueId) : 0
        } 
    });

    console.log(data);

    return (
        <>
            <LinkContainer>
                <LinkStyled to={'/'}>Issues</LinkStyled>
            </LinkContainer>
            <TitleContainer>
                <BigTitle>{data?.repository?.issue?.title} #{issueId}</BigTitle>
                <Description>
                    <Status isOpenState={data?.repository?.issue?.state === IssueState.Open}>
                        {data?.repository?.issue?.state === IssueState.Open ?
                            <OpenIssueIcon />
                            :
                            <SkipIcon />
                        }
                        {data?.repository?.issue?.state} 
                    </Status>
                    {data?.repository?.issue?.author?.login} opened this issue {data?.repository?.issue?.createdAt}
                </Description>
            </TitleContainer>
            <Box>
                <a href={data?.repository?.issue?.author?.url}>
                    <AvatarImg src={data?.repository?.issue?.author?.avatarUrl}/>
                </a>
                <Title>
                    {data?.repository?.issue?.author?.login} commented on {data?.repository?.issue?.createdAt}
                </Title>
                <Body
                    dangerouslySetInnerHTML={{
                        __html: data?.repository?.issue?.bodyHTML
                    }}
                />
            </Box>
            {data?.repository?.issue?.comments?.edges && data?.repository?.issue?.comments?.edges.map((comment, idx) => {
                    return (
                        <Box key={idx}>
                            <a href={comment?.node?.author?.url}>
                                <AvatarImg src={comment?.node?.author?.avatarUrl}/>
                            </a>
                            <Title>
                                {comment?.node?.author?.login} commented on {comment?.node?.issue?.createdAt}
                            </Title>
                            <Body
                                dangerouslySetInnerHTML={{
                                    __html: comment?.node?.issue.bodyHTML
                                }}
                            />
                        </Box>
                    );
            })}
        </>
    );
}