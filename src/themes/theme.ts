import baseStyled, { ThemedStyledInterface } from 'styled-components';

export const theme = {
	color: {
		orange: '#ff5f00',
		lightBlack: '#191919',
		lightGrey: '#e7e7e7',
		white: '#ffffff',
		black: '#000000'
	},
	screens: {
		mobile: '(max-width: 480px)',
		tablet: '(max-width: 768px)'
	},
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
