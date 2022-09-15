import styled from 'styled-components';

import { GithubIcon } from '../../../icons/GithubIcon';

export const GithubIco = styled(GithubIcon)`
	height: ${({ theme }) => theme.margins.margin10};
	width: ${({ theme }) => theme.margins.margin10};
	fill: ${({ theme }) => theme.colors.white};
	margin: ${({ theme }) => theme.margins.margin4};
`;
