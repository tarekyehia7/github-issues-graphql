import styled, { css } from 'styled-components';
import { ButtonType } from './Button';

const baseStyle = css`
    color: ${({ theme }) => theme.colors.blue};
	min-width: ${({ theme }) => theme.margins.margin8};
	padding: 5px 10px;
	font-style: normal;
	line-height: 20px;
	text-align: center;
	white-space: nowrap;
	vertical-align: middle;
	cursor: pointer;
	user-select: none;
	border: 1px solid transparent;
	border-radius: 6px;
	transition: border-color 0.2s cubic-bezier(0.3, 0, 0.5, 1);
	background-color: transparent;
	&:disabled {
		color: ${({ theme }) => theme.colors.gray};
		cursor: default;
		border-color: transparent;
		&: hover {
			border-color: transparent;
		}
	}
	&:hover {
		text-decoration: none;
		border-color: ${({ theme }) => theme.colors.lightGray};
		transition-duration: 0.1s;
	}
`;
export const ButtonStyled = styled.button<{ buttonType: ButtonType }>`
    ${baseStyle}
    ${({ buttonType, theme }) => buttonType === ButtonType.Text ? `
        display: flex;
        flex-direction: row;
        align-items: center;
        cursor: pointer;
        font-weight: 600;
        color: ${theme.colors.darkGray};
        padding-top: 1rem;
        background: transparent;
        border: none;
        &:hover {
            color: ${theme.colors.blue};
            text-decoration: none;
            > svg {
                background: ${theme.colors.blue};
            }
        }
    ` : `
        color: ${theme.colors.blue};
        min-width: ${theme.margins.margin8};
        padding: 5px 10px;
        font-style: normal;
        line-height: 20px;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        cursor: pointer;
        user-select: none;
        border: 1px solid transparent;
        border-radius: 6px;
        transition: border-color 0.2s cubic-bezier(0.3, 0, 0.5, 1);
        background-color: transparent;
        &:disabled {
            color: ${theme.colors.gray};
            cursor: default;
            border-color: transparent;
            &: hover {
                border-color: transparent;
            }
        }
        &:hover {
            text-decoration: none;
            border-color: ${theme.colors.lightGray};
            transition-duration: 0.1s;
        }
        `}
`;