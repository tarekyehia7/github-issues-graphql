import React, { PropsWithChildren } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { theme } from '../../themes';

export const PageWithTheme = ({ children }: PropsWithChildren) => {
	return (
		<BrowserRouter>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</BrowserRouter>
	);
};
