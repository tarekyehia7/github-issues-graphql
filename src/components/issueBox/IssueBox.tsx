import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import {
	Box,
	Ahref,
	Comments,
	CommentsIconStyled,
	Description,
	Header,
	OpenIssueIconStyled,
	SkipIconStyled,
	Title,
} from './IssueBox.styled';
import { IssueState } from '../../graphql/generatedTypes/graphql';
import { constants } from '../../helpers/constants';

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
	const navigate = useNavigate();

	const navigateToIssue = () => {
		navigate(`/${constants.repository}/${constants.projectName}/issue/${issueId}`);
	};

	return (
		<Box>
			<Header>
				<Title onClick={navigateToIssue}>
					{state === IssueState.Open && <OpenIssueIconStyled />}
					{state === IssueState.Closed && <SkipIconStyled />}
					{title}
				</Title>
				{totalCount > 0 && (
					<Comments onClick={navigateToIssue}>
						<CommentsIconStyled />
						{totalCount}
					</Comments>
				)}
			</Header>
			<Description>
				#{issueId} Opened
				{formatDistanceToNowStrict(new Date(createdAt))}
				ago by
				<Ahref href={authorUrl}>{authorName}</Ahref>
			</Description>
		</Box>
	);
};
