import styled, { keyframes } from 'styled-components';

const shine = keyframes`
    to {
    	background-position: 100% 0, /* move highlight to right */ 0 0;
    }
`;

export const SkeletonLoader = styled.span`
	width: 100%;
	height: 11px;
	display: block;
	background: linear-gradient(
			to right,
			rgba(255, 255, 255, 0),
			rgba(255, 255, 255, 0.5) 50%,
			rgba(255, 255, 255, 0) 80%
		),
		lightgray;
	background-repeat: repeat-y;
	background-size: 50px 500px;
	background-position: 0 0;
	animation: ${shine} 1s infinite;
`;

export const SkeletonContainer = styled.div`
	display: flex;
	flex-direction: column;
	border-bottom: 1px solid ${({ theme }) => theme.colors.darkWhite};
	padding: 22px 10px;
`;
