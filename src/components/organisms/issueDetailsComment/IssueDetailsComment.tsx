import React from 'react';

import { Card, CardType } from '../../molecules/Card/Card';
import { Link, LinkType } from '../../atoms/link/Link';
import { BodyHTMLDiv } from './IssueDetailsComment.styled';
import { formatDate } from '../../../helpers/helpers';

type IssueCommentProps = {
	authorUrl: string;
	avatarUrl: string;
	authorName: string;
	bodyHTML: string;
	createdAt: string;
};

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

export const IssueDetailsComment = ({
	authorUrl,
	avatarUrl,
	authorName,
	createdAt,
	bodyHTML,
}: IssueCommentProps) => {
	return (
		<Card
			type={CardType.withAvatar}
			title={
				<CardTitle authorName={authorName} authorUrl={authorUrl} createdAt={createdAt} />
			}
			authorUrl={authorUrl}
			avatarUrl={avatarUrl}
		>
			<BodyHTMLDiv
				dangerouslySetInnerHTML={{
					__html: bodyHTML,
				}}
			/>
		</Card>
	);
};
