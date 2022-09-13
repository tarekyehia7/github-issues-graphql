import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from 'styled-components';

import { Header } from './components/header/Header';
import { Issue } from "./pages/Issue/Issue";
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
              <Route path="issue/:issueId" element={<Issue />} />
          </Routes>
        </AppContainer>
    </>
	);
}

export default App;
