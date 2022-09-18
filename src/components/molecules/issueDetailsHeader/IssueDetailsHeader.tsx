import React from 'react';

import { Description, TitleContainer } from './IssueDetailsHeader.styled';
import { IssueState } from '../../../graphql/generatedTypes/graphql';
import { formatDate } from '../../../helpers/helpers';
import { Title, TitleSizeTypes } from '../../atoms/Title/Title';
import { Status, StatusEnum } from '../../atoms/status/Status';

export type IssueHeaderProps = {
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
}: IssueHeaderProps) => {
	const status = state === IssueState.Open ? StatusEnum.Open : StatusEnum.Closed;

	return (
		<TitleContainer>
			<Title titleSize={TitleSizeTypes.Large}>
				<span>{title}</span> #{issueId}
			</Title>
			<Description>
				<Status status={status} />
				{authorName} opened this issue {formatDate(createdAt)}
			</Description>
		</TitleContainer>
	);
};
