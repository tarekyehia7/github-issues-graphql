import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import { Header } from './components/organisms/Header/Header';
import { Topbar } from './components/organisms/Topbar/Topbar';
import { IssuePage } from './pages/Issue/Issue';
import { IssuesPage } from './pages/Issues/Issues';

const AppContainer = styled.div`
	margin: 1rem;
`;

function App() {
	return (
		<>
			<Header />
			<BrowserRouter>
				<Topbar />
				<AppContainer>
					<Routes>
						<Route path="*" element={<Navigate to="/" />} />
						<Route path="/" element={<IssuesPage />} />
						<Route path=":repo/:name/issue/:issueId" element={<IssuePage />} />
					</Routes>
				</AppContainer>
			</BrowserRouter>
		</>
	);
}

export default App;
