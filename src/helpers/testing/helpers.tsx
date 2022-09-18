import React, { PropsWithChildren } from 'react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { theme } from '../../themes';

export const PageWithTheme = ({ children }: PropsWithChildren) => {
	return (
		<BrowserRouter>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</BrowserRouter>
	);
};

export const PageWithThemeOnly = ({ children }: PropsWithChildren) => {
	return (
		<MemoryRouter initialEntries={['/facebook/react/issue/25264']}>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</MemoryRouter>
	);
};
