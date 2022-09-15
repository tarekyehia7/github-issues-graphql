import React from 'react';

import {
	Box,
	CommentsIconStyled,
	Description,
	Header,
	OpenIssueIconStyled,
	SkipIconStyled,
	CommentsSection,
	LinkStyled,
} from './IssueBox.styled';
import { Link, LinkType } from '../../atoms/link/Link';
import { IssueState } from '../../../graphql/generatedTypes/graphql';
import { constants } from '../../../constants';
import { formatDate } from '../../../helpers/helpers';

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
				<Link
					type={LinkType.Title}
					to={`/${constants.repository}/${constants.projectName}/issue/${issueId}`}
				>
					{state === IssueState.Open && <OpenIssueIconStyled />}
					{state === IssueState.Closed && <SkipIconStyled />}
					{title}
				</Link>
				{totalCount > 0 && (
					<CommentsSection>
						<LinkStyled
							type={LinkType.Normal}
							to={`/${constants.repository}/${constants.projectName}/issue/${issueId}`}
						>
							<CommentsIconStyled />
							<span>{totalCount}</span>
						</LinkStyled>
					</CommentsSection>
				)}
			</Header>
			<Description>
				<span>#{issueId} Opened </span>
				{formatDate(createdAt)}
				<span> ago by </span>
				<Link type={LinkType.Normal} to={authorUrl}>
					{authorName}
				</Link>
			</Description>
		</Box>
	);
};
