import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import App from './App';
import { theme } from './themes';
import { apolloClient } from './graphql';

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<ApolloProvider client={apolloClient}>
				<ThemeProvider theme={theme}>
					<App />
				</ThemeProvider>
			</ApolloProvider>
		</BrowserRouter>
	</React.StrictMode>,
);
