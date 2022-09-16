import styled from 'styled-components';

export const TitleContainer = styled.div`
	font-weight: 400;
	padding-bottom: 3rem;
	border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
`;

export const Description = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

