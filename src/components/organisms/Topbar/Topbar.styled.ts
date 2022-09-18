import styled from 'styled-components';

export const LinkContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 4rem;
	justify-content: flex-start;
	padding: ${({ theme }) => theme.margins.margin4};
	background-color: ${({ theme }) => theme.colors.lightBlue};
`;
