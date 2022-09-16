import styled from 'styled-components';

import { Image } from '../../atoms/Image/Image';
import { Title } from '../../atoms/Title/Title';

export const Box = styled.div<{ withAvatar: boolean }>`
	color: ${({ theme }) => theme.colors.lightBlack};
	background-color: ${({ theme }) => theme.colors.white};
	border: 1px solid ${({ theme }) => theme.colors.lightGray};
	border-radius: 6px;
	position: relative;
	${({ withAvatar }) => withAvatar && 'margin: 4rem;'}
	${({ withAvatar }) => !withAvatar && 'margin-top: 1rem;'}
	margin-bottom: ${({ theme }) => theme.margins.margin4};
	margin-right: 0;
	@media (max-width: 480px) {
		& > a {
			display: none;
		}
		margin: 0rem;
		margin-top: ${({ theme }) => theme.margins.margin4};
	}
	${({ withAvatar, theme }) =>
		withAvatar &&
		`
        @media (min-width: 480px) {
            &:before {
                position: absolute;
                top: 11px;
                right: 100%;
                left: -8px;
                display: block;
                width: 8px;
                height: 16px;
                pointer-events: none;
                content: ' ';
                clip-path: polygon(0 50%, 100% 0, 100% 100%);
                background-color: ${theme.colors.lightGray};
            }
        }
    `}
`;

export const Body = styled.div`
	font-size: 14px;
	color: ${({ theme }) => theme.colors.black};
	@media (max-width: 480px) {
		overflow: auto;
	}
`;

export const ImageStyled = styled(Image)`
	position: absolute;
	left: -53px;
`;

export const TitleStyled = styled.div`
    padding: ${({ theme }) => theme.margins.margin4};
    background-color: #f6f8fa;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
`;