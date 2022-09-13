import React from "react";

import { SkeletonContainer, SkeletonLoader } from "./Skeleton.styled";

export const Skeleton = () => {
	return (
		<SkeletonContainer>
			<SkeletonLoader style={{ marginBottom: "1rem" }} />
			<SkeletonLoader />
		</SkeletonContainer>
	);
};
