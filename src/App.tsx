import React from "react";
import { Route, Routes } from "react-router-dom";

import { Header } from './components/header/Header';
import { Issue } from "./pages/Issue/Issue";
import { IssuesPage } from './pages/Issues/Issues';

function App() {
	return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<IssuesPage />} />
        <Route path="issue/:issueId" element={<Issue />} />
      </Routes>
    </>
	);
}

export default App;
