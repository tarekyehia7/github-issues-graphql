import baseStyled, { ThemedStyledInterface } from 'styled-components';

export const theme = {
	colors: {
		blue: '#0969da',
		lightBlue: '#f6f8fa',
		gray: '#8c959f',
		lightGray: '#d0d7de',
		lightBlack: '#24292f',
		darkGray: '#57606a',
		orange: '#fd8c73',
		darkWhite: '#d8dee4',

		white: '#ffffff',
		black: '#000000',
	},
	margins: {
		margin1: '0.25rem',
		margin2: '0.5rem',
		margin3: '0.75rem',
		margin4: '1rem',
		margin5: '1.25',
		margin6: '1.5rem',
		margin7: '1.75rem',
		margin8: '2rem',
		margin9: '2.25rem',
		margin10: '2.5rem',
		margin11: '2.75rem',
		margin12: '3rem',
		margin13: '3.25rem',
		margin14: '3.50rem',
		margin15: '3.75rem',
		margin16: '4rem',
	},
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
