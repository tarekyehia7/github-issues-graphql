import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useGetIssueQuery } from '../../graphql/generatedTypes/graphql';
import { IssueComment } from '../../components/issueComment/IssueComment';
import { IssueHeader } from '../../components/issueHeader/IssueHeader';

export const Issue = () => {
    const { issueId } = useParams();
    const navigate = useNavigate();
    const { data, error, loading} = useGetIssueQuery({
        variables: {
            issueId: issueId ? parseInt(issueId) : 0
        } 
    });

    const issueData = data?.repository?.issue;
    const issueEdges = data?.repository?.issue?.comments?.edges;

    if (error) navigate('/')
    if (loading) return null;

    return (
        <>
            {issueData && issueData.author &&
                <>
                    <IssueHeader
                        title={issueData.title}
                        state={issueData.state}
                        issueId={issueId ?? ''}
                        authorName={issueData.author.login}
                        createdAt={issueData.createdAt}
                    />
                    <IssueComment
                        authorUrl={issueData.author.url}
                        avatarUrl={issueData.author.avatarUrl}
                        authorName={issueData.author.login}
                        createdAt={issueData.createdAt}
                        bodyHTML={issueData.bodyHTML}
                    />
                </>
            }
            {issueEdges && issueEdges.map((edge, idx) => {
                    const comment = edge?.node;
                    const author = comment?.author;
                    if (!comment || !author) return null;
                    return (
                        <IssueComment
                            key={`issue-comment-${idx}`}
                            authorUrl={author.url}
                            avatarUrl={author.avatarUrl}
                            authorName={author.login}
                            createdAt={comment.issue.createdAt}
                            bodyHTML={comment.issue.bodyHTML}
                        />
                    );
            })}
        </>
    );
}