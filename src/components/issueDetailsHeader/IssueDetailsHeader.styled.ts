import styled from "styled-components";

export const TitleContainer = styled.div`
	font-weight: 400;
	padding-bottom: 3rem;
	border-bottom: 1px solid #d0d7de;
`;

export const BigTitle = styled.h1``;

export const Description = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

export const Status = styled.span<{ isOpenState: boolean }>`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: ${({ isOpenState }) => (isOpenState ? "4rem" : "5rem")};
	border: 1px solid transparent;
	color: #ffffff;
	padding: 5px 12px;
	font-size: 14px;
	font-weight: 500;
	line-height: 20px;
	text-align: center;
	white-space: nowrap;
	border-radius: 2em;
	background-color: ${({ isOpenState }) => (isOpenState ? "#fa4549" : "#6e7781")};
	svg {
		fill: #ffffff;
	}
`;
