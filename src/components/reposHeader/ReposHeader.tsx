import React from "react";

import { LinkContainer, LinkStyled } from "./ReposHeader.styled";

export const ReposHeader = () => {
	return (
		<LinkContainer>
			<LinkStyled to={"/"}>Issues</LinkStyled>
		</LinkContainer>
	);
};
