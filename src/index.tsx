import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloProvider } from '@apollo/client';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import App from './App';
import { theme } from './themes';
import { apolloClient } from './graphql';

const GlobalStyle = createGlobalStyle`
	body {
		margin: 0;
	}
`;

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<React.StrictMode>
		<ApolloProvider client={apolloClient}>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<App />
			</ThemeProvider>
		</ApolloProvider>
	</React.StrictMode>,
);
