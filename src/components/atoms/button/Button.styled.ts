import styled from 'styled-components';

export const ButtonStyled = styled.button`
	color: ${({ theme }) => theme.colors.blue};
	min-width: ${({ theme }) => theme.margins.margin8};
	padding: 5px 10px;
	font-style: normal;
	line-height: 20px;
	text-align: center;
	white-space: nowrap;
	vertical-align: middle;
	cursor: pointer;
	-webkit-user-select: none;
	user-select: none;
	border: 1px solid transparent;
	border-radius: 6px;
	transition: border-color 0.2s cubic-bezier(0.3, 0, 0.5, 1);
	background-color: transparent;
	&:disabled {
		color: ${({ theme }) => theme.colors.gray};
		cursor: default;
		border-color: transparent;
		&: hover {
			border-color: transparent;
		}
	}
	&:hover {
		text-decoration: none;
		border-color: ${({ theme }) => theme.colors.lightGray};
		transition-duration: 0.1s;
	}
`;
