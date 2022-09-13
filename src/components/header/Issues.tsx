import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { formatDistanceToNowStrict } from 'date-fns';

import { GetIssuesQuery, IssueState } from '../../graphql/generatedTypes/graphql';
import { CommentsIcon } from '../../icons/CommentsIcon';
import { OpenIssueIcon } from '../../icons/OpenIssueIcon';
import { SkipIcon } from '../../icons/SkipIcon';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 0;
    margin-left: 0;
    border: 1px solid #d0d7de;
    border-radius: 6px;
`;

const Box = styled.div`
    padding: 16px;
    list-style-type: none;
    border-top-color: #d8dee4;
    border-top-style: solid;
    border-top-width: 1px;
    &:hover {
        background-color: #f6f8fa;
    }
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Title = styled.h4`
    display: flex;
    font-size: 16px;
    font-weight: 600;
    color: #24292f;
    margin-top: 0;
    cursor: pointer;
    &:hover {
        color: #0969da;
    }
`;

const CommentsIconStyled = styled(CommentsIcon)`
    margin-right: 0.2rem;
    margin-top: 0.1rem;
`;

const Comments = styled.span`
    display: flex;
    align-items: flex-start;
    cursor: pointer;
    &:hover {
        color: #0969da;
        ${CommentsIconStyled} {
            fill: #0969da;
        }
    }
`;

const Description = styled.div`
    color: #57606a;
    margin-left: 1.7rem;
    font-size: 13px;
`;

const OpenIssueIconStyled = styled(OpenIssueIcon)`
    min-height: 1rem;
    min-width: 2rem;
    margin-top: 0.07rem;
`;

const SkipIconStyled = styled(SkipIcon)`
    min-height: 1rem;
    min-width: 2rem;
    margin-top: 0.07rem;
`;

const Ahref = styled.a`
    color: #57606a;
    cursor: pointer;
    text-decoration: none;
    &:hover {
        color: #0969da;
    }
`;

type IssuesProps = {
    data: GetIssuesQuery;
};

export const Issues = ({ data }: IssuesProps) => {
    const navigate = useNavigate();
    const issues = data?.search?.edges;

    const navigateToIssue = (id: number) => {
        navigate(`issue/${id}`);
    };

    return (
        <Container>
            {issues && issues.map((edges, Idx) => {
                if (edges?.node?.__typename === "Issue") {
                    const id = edges?.node?.number;

                    return <Box key={Idx}>
                        <Header>
                            <Title onClick={() => navigateToIssue(id)}>
                                {edges.node.state === IssueState.Open && <OpenIssueIconStyled />}
                                {edges.node.state === IssueState.Closed && <SkipIconStyled />}
                                {edges?.node?.title}
                            </Title>
                            {edges?.node?.comments?.totalCount > 0 &&
                                <Comments onClick={() => navigateToIssue(id)}><CommentsIconStyled />{edges?.node?.comments?.totalCount}</Comments>
                            }
                        </Header>
                        <Description>#{edges.node.number} Opened {formatDistanceToNowStrict(new Date(edges.node.createdAt))} ago by <Ahref href={edges.node.author?.url}>{edges.node.author?.login}</Ahref></Description>
                    </Box>
                }
                return null;
            })}
        </Container>
    );
};