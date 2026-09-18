import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Portfolio from './pages/Portfolio';
import ProjectDetail from './pages/ProjectDetail';
import CyberShikshaStory from './pages/CyberShikshaStory';
import ResearchAwardStory from './pages/ResearchAwardStory';
import NationalRecognitionStory from './pages/NationalRecognitionStory';
import CompetitiveProgrammingStory from './pages/CompetitiveProgrammingStory';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/stories/cyber-shiksha" element={<CyberShikshaStory />} />
        <Route path="/stories/research-award" element={<ResearchAwardStory />} />
        <Route path="/stories/national-recognition" element={<NationalRecognitionStory />} />
        <Route path="/stories/competitive-programming" element={<CompetitiveProgrammingStory />} />
      </Routes>
    </div>
  );
}

export default App;
