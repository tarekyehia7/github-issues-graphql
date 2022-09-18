import styled from 'styled-components';

export const HeaderStyled = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	flex-direction: column;
	background-color: ${({ theme }) => theme.colors.lightBlack};
	min-height: 4rem;
`;
