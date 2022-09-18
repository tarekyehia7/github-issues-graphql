import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useGetIssueQuery } from '../../graphql/generatedTypes/graphql';
import { IssueDetailsHeader } from '../../components/molecules/issueDetailsHeader/IssueDetailsHeader';
import { constants } from '../../constants';
import { Card, CardType } from '../../components/molecules/Card/Card';
import { formatDate } from '../../helpers/helpers';
import { Link, LinkType } from '../../components/atoms/link/Link';
import styled from 'styled-components';

const BodyHTMLDiv = styled.div`
	padding: 16px;
`;

type TitleProps = {
	authorName: string;
	authorUrl: string;
	createdAt: string;
};

const CardTitle = ({ authorName, authorUrl, createdAt }: TitleProps) => {
	return (
		<>
			<Link type={LinkType.Normal} to={authorUrl}>
				{authorName}
			</Link>
			<span>&nbsp;commented {formatDate(createdAt)} ago</span>
		</>
	);
};

export const IssuePage = () => {
	const { issueId } = useParams();
	const navigate = useNavigate();
	const { data, error, loading } = useGetIssueQuery({
		variables: {
			issueId: issueId ? parseInt(issueId) : 0,
			owner: constants.repository,
			projectName: constants.projectName,
		},
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
					<Card
						type={CardType.withAvatar}
						title={
							<CardTitle
								authorName={issueData.author.login}
								authorUrl={issueData.author.url}
								createdAt={issueData.createdAt}
							/>
						}
						authorUrl={issueData.author.url}
						avatarUrl={issueData.author.avatarUrl}
					>
						<BodyHTMLDiv
							dangerouslySetInnerHTML={{
								__html: issueData.bodyHTML,
							}}
						/>
					</Card>
				</>
			)}
			{issueEdges &&
				issueEdges.map((edge, idx) => {
					const comment = edge?.node;
					const author = comment?.author;
					if (!comment || !author) return null;

					return (
						<Card
							key={`issue-comment-${idx}`}
							type={CardType.withAvatar}
							title={
								<CardTitle
									authorName={author.login}
									authorUrl={author.url}
									createdAt={comment.createdAt}
								/>
							}
							authorUrl={author.url}
							avatarUrl={author.avatarUrl}
						>
							<BodyHTMLDiv
								dangerouslySetInnerHTML={{
									__html: comment.bodyHTML,
								}}
							/>
						</Card>
					);
				})}
		</>
	);
};
