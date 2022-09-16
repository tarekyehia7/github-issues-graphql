import styled from 'styled-components';

export const StatusStyled = styled.span<{ isOpenState: boolean }>`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: ${({ isOpenState }) => (isOpenState ? '4rem' : '5rem')};
	border: 1px solid transparent;
	color: ${({ theme }) => theme.colors.white};
	padding: 5px 12px;
	font-size: 14px;
	font-weight: 500;
	line-height: 20px;
	text-align: center;
	white-space: nowrap;
	border-radius: 2em;
	background-color: ${({ isOpenState }) => (isOpenState ? '#fa4549' : '#6e7781')};
	margin-right: 0.7rem;
	width: ${({ isOpenState }) => (isOpenState ? '3rem' : '3.75rem')};
	svg {
		fill: ${({ theme }) => theme.colors.white};
	}
`;
