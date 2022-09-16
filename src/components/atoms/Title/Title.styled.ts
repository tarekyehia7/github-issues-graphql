import styled from 'styled-components';

export const TitleSmallStyled = styled.div`
	display: flex;
	align-items: center;
	color: ${({ theme }) => theme.colors.darkGrey};
	font-size: ${({ theme }) => theme.margins.margin4};
`;

export const TitleBigStyled = styled.h1``;

export const TitleMediumStyled = styled.h3``;
