import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict';
import React from 'react';

import {
	Box,
	Ahref,
	CommentsLink,
	CommentsIconStyled,
	Description,
	Header,
	OpenIssueIconStyled,
	SkipIconStyled,
	TitleLink,
} from './IssueBox.styled';
import { IssueState } from '../../graphql/generatedTypes/graphql';
import { constants } from '../../constants';

type IssueBoxProps = {
	state: IssueState;
	title: string;
	totalCount: number;
	issueId: number;
	createdAt: string;
	authorName: string;
	authorUrl: string;
};

export const IssueBox = ({
	state,
	title,
	totalCount,
	issueId,
	createdAt,
	authorName,
	authorUrl,
}: IssueBoxProps) => {

	return (
		<Box>
			<Header>
				<TitleLink to={`/${constants.repository}/${constants.projectName}/issue/${issueId}`}>
					{state === IssueState.Open && <OpenIssueIconStyled />}
					{state === IssueState.Closed && <SkipIconStyled />}
					{title}
				</TitleLink>
				{totalCount > 0 && (
					<CommentsLink to={`/${constants.repository}/${constants.projectName}/issue/${issueId}`}>
						<CommentsIconStyled />
						{totalCount}
					</CommentsLink>
				)}
			</Header>
			<Description>
				<span>#{issueId} Opened </span>
				{formatDistanceToNowStrict(new Date(createdAt))}
				<span> ago by </span>
				<Ahref href={authorUrl}>{authorName}</Ahref>
			</Description>
		</Box>
	);
};
