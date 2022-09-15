import React, { PropsWithChildren } from 'react';

import { Link, LinkType } from '../../atoms/link/Link';
import { Title, TitleSizeTypes } from '../../atoms/Title/Title';
import { AvatarImg, Body, Box } from './Card.styled';

export enum CardType {
    Normal,
    withAvatar
}

type CardProps = {
    title: JSX.Element;
    cardType: CardType;
    authorUrl?: string
    avatarUrl?: string;
};

export const Card = ({
    title,
    children,
    cardType,
    avatarUrl,
    authorUrl
}: CardProps & PropsWithChildren) => {
    return (
        <Box>
            {cardType === CardType.withAvatar &&
                <Link type={LinkType.Normal} to={authorUrl}>
                    <AvatarImg alt="avatar url" src={avatarUrl} />
                </Link>
            }
			<Title titleSize={TitleSizeTypes.Small}>
				{title}
			</Title>
			<Body>{children}</Body>
		</Box>
    );
};