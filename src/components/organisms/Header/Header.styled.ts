import styled from 'styled-components';

import { GithubIcon } from '../../../icons/GithubIcon';

export const LinkContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 4rem;
	justify-content: flex-start;
	padding: ${({ theme }) => theme.margins.margin4};
	background-color: ${({ theme }) => theme.colors.lightBlue};
`;

export const GithubIco = styled(GithubIcon)`
	height: ${({ theme }) => theme.margins.margin10};
	width: ${({ theme }) => theme.margins.margin10};
	fill: ${({ theme }) => theme.colors.white};
	margin: ${({ theme }) => theme.margins.margin4};
`;
