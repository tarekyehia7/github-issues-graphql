import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { CommentsIcon } from '../../../icons/CommentsIcon';
import { OpenIssueIcon } from '../../../icons/OpenIssueIcon';
import { SkipIcon } from '../../../icons/SkipIcon';

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

export const CommentsIconStyled = styled(CommentsIcon)`
	margin-right: 0.2rem;
	margin-top: 0.1rem;
`;

export const CommentsSection = styled.div`
    display: flex;
	align-items: flex-start;
	cursor: pointer;
    &:hover {
        > a {
            color: #0969da;
        }
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