import styled from 'styled-components';

import { CorrectIcon } from '../../../icons/CorrectIcon';
import { OpenIssueIcon } from '../../../icons/OpenIssueIcon';

export const ButtonsContainer = styled.div`
	display: flex;
	flex-direction: row;
	padding: 1rem;
`;

export const Button = styled.button<{ isSelected: boolean }>`
	display: inline-flex;
	padding: 0.5rem;
	font-size: inherit;
	color: black;
	text-decoration: none;
	white-space: nowrap;
	cursor: pointer;
	-webkit-user-select: none;
	user-select: none;
	background-color: transparent;
	border: 0;
	-webkit-appearance: none;
	appearance: none;
	color: ${({ isSelected }) => (isSelected ? '#24292f' : '#57606a')};
	${({ isSelected }) => isSelected && 'font-weight: bold;'}
`;

export const OpenIssueIconStyled = styled(OpenIssueIcon)<{ isSelected: boolean }>`
	fill: ${({ isSelected }) => (isSelected ? '#24292f' : '#57606a')};
	margin-right: 0.5rem;
`;

export const CorrectIconStyled = styled(CorrectIcon)<{ isSelected: boolean }>`
	fill: ${({ isSelected }) => (isSelected ? '#24292f' : '#57606a')};
	margin-right: 0.5rem;
`;
