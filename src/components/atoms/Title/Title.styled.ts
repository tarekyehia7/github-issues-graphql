import styled from 'styled-components';

export const TitleSmallStyled = styled.div`
	display: flex;
	align-items: center;
	padding: ${({ theme }) => theme.margins.margin4};
	color: ${({ theme }) => theme.colors.darkGrey};
	background-color: #f6f8fa;
	border-top-left-radius: 6px;
	border-top-right-radius: 6px;
	font-size: ${({ theme }) => theme.margins.margin4};
`;

export const TitleBigStyled = styled.h1``;
