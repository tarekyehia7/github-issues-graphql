import styled from 'styled-components';

import { GithubIcon } from '../../../icons/GithubIcon';

export const HeaderStyled = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	flex-direction: column;
	background-color: ${({ theme }) => theme.colors.lightBlack};
`;

export const GithubIco = styled(GithubIcon)`
	height: ${({ theme }) => theme.margins.margin10};
	width: ${({ theme }) => theme.margins.margin10};
	fill: ${({ theme }) => theme.colors.white};
	margin: ${({ theme }) => theme.margins.margin4};
`;
