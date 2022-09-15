import styled from 'styled-components';

import { CommentsIcon } from '../../../icons/CommentsIcon';
import { OpenIssueIcon } from '../../../icons/OpenIssueIcon';
import { SkipIcon } from '../../../icons/SkipIcon';
import { Link } from '../../atoms/link/Link';

export const Box = styled.div`
	padding: 16px;
	list-style-type: none;
	border-top-color: #d8dee4;
	border-top-style: solid;
	border-top-width: 1px;
	&:hover {
		background-color: ${({ theme }) => theme.colors.lightBlue};
	}
`;

export const Header = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const CommentsIconStyled = styled(CommentsIcon)`
	margin-right: 0.2rem;
	height: ${({ theme }) => theme.margins.margin4};
    width: ${({ theme }) => theme.margins.margin4};
`;

export const CommentsSection = styled.div`
	display: flex;
	align-items: flex-start;
	cursor: pointer;
	&:hover {
		> a {
			color: ${({ theme }) => theme.colors.blue};
		}
		${CommentsIconStyled} {
			fill: ${({ theme }) => theme.colors.blue};
		}
	}
`;

export const Description = styled.div`
	color: ${({ theme }) => theme.colors.darkGray};
	margin-left: 1.7rem;
	font-size: 13px;
`;

export const OpenIssueIconStyled = styled(OpenIssueIcon)`
	min-height: ${({ theme }) => theme.margins.margin4};
	min-width: ${({ theme }) => theme.margins.margin8};
	margin-top: 0.07rem;
	fill: #cf222e;
`;

export const SkipIconStyled = styled(SkipIcon)`
	min-height: ${({ theme }) => theme.margins.margin4};
	min-width: ${({ theme }) => theme.margins.margin8};
	margin-top: 0.07rem;
`;

export const LinkStyled = styled(Link)`
	display: flex;
    align-items: center;
`;