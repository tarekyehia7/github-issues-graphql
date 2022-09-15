import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const TitleLink = styled(Link)`
	display: flex;
	font-size: 16px;
	font-weight: 600;
	color: #24292f;
	margin-top: 0;
	cursor: pointer;
    background: transparent;
    margin: 1rem;
    margin-top: 0;
    text-decoration: none;
	&:hover {
		color: #0969da;
	}
`;

export const LinkStyled = styled.a<{ invertColor: boolean }>`
	color: ${({ invertColor }) => invertColor ? '#0969da' : '#57606a'};
	cursor: pointer;
	text-decoration: none;
	&:hover {
		${({ invertColor }) => invertColor && 'text-decoration: underline;'}
        color: #0969da;
	}
`;


export const HeaderLinkStyled = styled(Link)`
	position: relative;
	text-decoration: none;
	font-weight: 600;
	color: #24292f;
	border-bottom-color: #fd8c73;
	display: flex;
	padding: 0 8px;
	font-size: 14px;
	line-height: 30px;
	color: #24292f;
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
		background: #fd8c73;
		border-radius: 6px;
		transform: translate(50%, -50%);
	}
`;