import styled from 'styled-components';

export const InputStyled = styled.input`
	padding: 5px 26px;
	font-size: 14px;
	line-height: 20px;
	vertical-align: middle;
	background-repeat: no-repeat;
	background-position: right 8px center;
	border: 1px solid ${({ theme }) => theme.colors.lightGray};
	border-radius: 6px;
	outline: none;
	width: 100%;
	background-color: ${({ theme }) => theme.colors.lightBlue};
	box-shadow: inset 0 1px 0 rgba(208, 215, 222, 0.2);
`;
