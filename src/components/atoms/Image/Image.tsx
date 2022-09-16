import React from 'react';

import { AvatarImg } from './Image.styled';

export enum ImageShapeEnum {
	Circle = 'circle',
}

export type ImageProps = {
	shape: ImageShapeEnum;
	avatarUrl: string;
	className?: string;
};

export const Image = ({ className, shape, avatarUrl }: ImageProps) => {
	if (shape == ImageShapeEnum.Circle) {
		return <AvatarImg className={className} alt="avatar url" src={avatarUrl} />;
	}
	return null;
};
