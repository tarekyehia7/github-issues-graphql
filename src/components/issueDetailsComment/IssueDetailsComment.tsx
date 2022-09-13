import React from 'react';
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict';

import {
    Box,
    AvatarImg,
    Body,
    Title
} from './IssueDetailsComment.styled';

type IssueCommentProps = {
    authorUrl: string;
    avatarUrl: string;
    authorName: string;
    bodyHTML: string;
    createdAt: string;
};

export const IssueDetailsComment = ({
    authorUrl,
    avatarUrl,
    authorName,
    createdAt,
    bodyHTML
}: IssueCommentProps) => {
    return (
        <Box>
            <a href={authorUrl}>
                <AvatarImg src={avatarUrl}/>
            </a>
            <Title>
                {authorName} commented {formatDistanceToNowStrict(new Date(createdAt))} ago
            </Title>
            <Body
                dangerouslySetInnerHTML={{
                    __html: bodyHTML
                }}
            />
        </Box>
    );
};