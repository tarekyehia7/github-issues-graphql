import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import { Header } from './components/organisms/Header/Header';
import { IssuePage } from './pages/Issue/Issue';
import { IssuesPage } from './pages/Issues/Issues';

const AppContainer = styled.div`
	margin: 1rem;
`;

function App() {
	return (
		<>
			<Header />
			<AppContainer>
				<Routes>
					<Route path="/" element={<IssuesPage />} />
					<Route path=":repo/:name/issue/:issueId" element={<IssuePage />} />
				</Routes>
			</AppContainer>
		</>
	);
}

export default App;
