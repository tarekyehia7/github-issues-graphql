import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import { Header } from './components/header/Header';
import { ReposHeader } from './components/reposHeader/ReposHeader';
import { Issue } from './pages/Issue/Issue';
import { IssuesPage } from './pages/Issues/Issues';

const AppContainer = styled.div`
	margin: 1rem;
`;

function App() {
	return (
		<>
			<Header />
			<ReposHeader />
			<AppContainer>
				<Routes>
					<Route path="/" element={<IssuesPage />} />
					<Route path="issue/:issueId" element={<Issue />} />
				</Routes>
			</AppContainer>
		</>
	);
}

export default App;
