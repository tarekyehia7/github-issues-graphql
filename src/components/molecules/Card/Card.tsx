import React, { PropsWithChildren } from 'react';

import { Link, LinkType } from '../../atoms/link/Link';
import { Title, TitleSizeTypes } from '../../atoms/Title/Title';
import { ImageShapeEnum } from '../../atoms/Image/Image';
import { Body, Box, ImageStyled, TitleStyled } from './Card.styled';

export enum CardType {
	Normal = 'normal',
	withAvatar = 'with avatar',
}

export type CardProps = {
	title: JSX.Element;
	type: CardType;
	authorUrl?: string;
	avatarUrl?: string;
} & PropsWithChildren;

export const Card = ({
	title,
	children,
	type,
	avatarUrl,
	authorUrl,
}: CardProps) => {
	return (
		<Box data-testid="card" withAvatar={type === CardType.withAvatar}>
			{type === CardType.withAvatar && (
				<Link type={LinkType.Normal} to={authorUrl}>
					<ImageStyled shape={ImageShapeEnum.Circle} avatarUrl={avatarUrl ?? ''} />
				</Link>
			)}
			<TitleStyled>
				<Title titleSize={TitleSizeTypes.Small}>{title}</Title>
			</TitleStyled>
			<Body>{children}</Body>
		</Box>
	);
};
