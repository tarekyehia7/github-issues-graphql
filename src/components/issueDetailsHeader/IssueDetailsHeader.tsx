import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict';
import React from 'react';

import { BigTitle, Description, Status, TitleContainer } from './IssueDetailsHeader.styled';
import { IssueState } from '../../graphql/generatedTypes/graphql';
import { OpenIssueIcon } from '../../icons/OpenIssueIcon';
import { SkipIcon } from '../../icons/SkipIcon';

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
	createdAt,
}: IssueHeaderProps) => (
	<TitleContainer>
		<BigTitle>
			<span>{title}</span> #{issueId}
		</BigTitle>
		<Description>
			<Status isOpenState={state === IssueState.Open}>
				{state === IssueState.Open ? <OpenIssueIcon /> : <SkipIcon />}
				{state}
			</Status>
			{authorName} opened this issue {formatDistanceToNowStrict(new Date(createdAt))} ago
		</Description>
	</TitleContainer>
);
