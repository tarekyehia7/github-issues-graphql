import React from 'react';

import { SkeletonContainer, SkeletonLoader } from './Skeleton.styled';

export const Skeleton = () => {
	return (
		<SkeletonContainer data-testid="skeleton">
			<SkeletonLoader style={{ marginBottom: '1rem' }} />
			<SkeletonLoader />
		</SkeletonContainer>
	);
};
