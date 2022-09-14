import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { CommentsIcon } from '../../icons/CommentsIcon';
import { OpenIssueIcon } from '../../icons/OpenIssueIcon';
import { SkipIcon } from '../../icons/SkipIcon';

export const Box = styled.div`
	padding: 16px;
	list-style-type: none;
	border-top-color: #d8dee4;
	border-top-style: solid;
	border-top-width: 1px;
	&:hover {
		background-color: #f6f8fa;
	}
`;

export const Header = styled.div`
	display: flex;
	justify-content: space-between;
`;

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

export const CommentsIconStyled = styled(CommentsIcon)`
	margin-right: 0.2rem;
	margin-top: 0.1rem;
`;

export const CommentsLink = styled(Link)`
	display: flex;
	align-items: flex-start;
	cursor: pointer;
    color: #000000;
    text-decoration: none;
	&:hover {
		color: #0969da;
		${CommentsIconStyled} {
			fill: #0969da;
		}
	}
`;

export const Description = styled.div`
	color: #57606a;
	margin-left: 1.7rem;
	font-size: 13px;
`;

export const OpenIssueIconStyled = styled(OpenIssueIcon)`
	min-height: 1rem;
	min-width: 2rem;
	margin-top: 0.07rem;
	fill: #cf222e;
`;

export const SkipIconStyled = styled(SkipIcon)`
	min-height: 1rem;
	min-width: 2rem;
	margin-top: 0.07rem;
`;

export const Ahref = styled.a`
	color: #57606a;
	cursor: pointer;
	text-decoration: none;
	&:hover {
		color: #0969da;
	}
`;
