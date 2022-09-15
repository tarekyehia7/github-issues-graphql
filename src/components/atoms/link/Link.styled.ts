import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const TitleLink = styled(Link)`
	display: flex;
	font-size: 16px;
	font-weight: 600;
	color: ${({ theme }) => theme.colors.lightBlack};
	margin-top: 0;
	cursor: pointer;
	background: transparent;
	margin: ${({ theme }) => theme.margins.margin4};
	margin-top: 0;
	text-decoration: none;
	&:hover {
		color: ${({ theme }) => theme.colors.blue};
	}
`;

export const LinkStyled = styled.a<{ invertColor: boolean }>`
	color: ${({ invertColor, theme }) => (invertColor ? theme.colors.blue : theme.colors.darkGray)};
	cursor: pointer;
	text-decoration: none;
	&:hover {
		${({ invertColor }) => invertColor && 'text-decoration: underline;'}
		color: ${({ theme }) => theme.colors.blue};
	}
`;

export const HeaderLinkStyled = styled(Link)`
	position: relative;
	text-decoration: none;
	font-weight: 600;
	color: ${({ theme }) => theme.colors.lightBlack};
	display: flex;
	padding: 0 8px;
	font-size: 14px;
	line-height: 30px;
	text-align: center;
	white-space: nowrap;
	cursor: pointer;
	background-color: transparent;
	border: 0;
	border-radius: 6px;
	align-items: center;
	&:after {
		position: absolute;
		right: 50%;
		bottom: calc(50% - 25px);
		width: 4rem;
		height: 2px;
		content: '';
		background: ${({ theme }) => theme.colors.orange};
		border-radius: 6px;
		transform: translate(50%, -50%);
	}
`;
