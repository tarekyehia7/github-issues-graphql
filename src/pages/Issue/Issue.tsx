import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useGetIssueQuery } from '../../graphql/generatedTypes/graphql';
import { IssueDetailsComment } from '../../components/organisms/issueDetailsComment/IssueDetailsComment';
import { IssueDetailsHeader } from '../../components/organisms/issueDetailsHeader/IssueDetailsHeader';
import { constants } from '../../constants';

export const IssuePage = () => {
	const { issueId } = useParams();
	const navigate = useNavigate();
	const { data, error, loading } = useGetIssueQuery({
		variables: {
			issueId: issueId ? parseInt(issueId) : 0,
			owner: constants.repository,
			projectName: constants.projectName,
		},
		fetchPolicy: 'cache-and-network',
	});

	const issueData = data?.repository?.issue;
	const issueEdges = data?.repository?.issue?.comments?.edges;

	if (error) navigate('/');
	if (loading) return null;

	return (
		<>
			{issueData && issueData.author && (
				<>
					<IssueDetailsHeader
						title={issueData.title}
						state={issueData.state}
						issueId={issueId ?? ''}
						authorName={issueData.author.login}
						createdAt={issueData.createdAt}
					/>
					<IssueDetailsComment
						authorUrl={issueData.author.url}
						avatarUrl={issueData.author.avatarUrl}
						authorName={issueData.author.login}
						createdAt={issueData.createdAt}
						bodyHTML={issueData.bodyHTML}
					/>
				</>
			)}
			{issueEdges &&
				issueEdges.map((edge, idx) => {
					const comment = edge?.node;
					const author = comment?.author;
					if (!comment || !author) return null;
					
					return (
						<IssueDetailsComment
							key={`issue-comment-${idx}`}
							authorUrl={author.url}
							avatarUrl={author.avatarUrl}
							authorName={author.login}
							createdAt={comment.createdAt}
							bodyHTML={comment.bodyHTML}
						/>
					);
				})}
		</>
	);
};
