import React, { useState, useEffect, useCallback } from 'react';

import "./styles/App.css";
import "./styles/project-grid.css";
import "./styles/sidebar.css";

import Cursor from './components/Cursor';
import ProjectGrid from './components/ProjectGrid';
import SideBar from './components/SideBar';

import BgVideo from '../src/assets/video/bg-video.mp4';
import { useAllPrismicDocumentsByType } from '@prismicio/react';

const App = () => {
  const [cursorPosition, setCursorPosition] = useState({ left: 0, top: 0 });
  const [projects, setProjects] = useState([])
  const [documents] = useAllPrismicDocumentsByType('project-cover')

  const fetchProjectArray = useCallback((documents) => {
    return documents ? documents.map((doc) => ({
      id: doc.uid,
      img: doc.data.cover.url,
      name: doc.data.title[0].text,
      link: doc.data.link.url
    })).sort((a, b) => a.id - b.id) : [];
  }, []);

  useEffect(() => {
    setProjects(fetchProjectArray(documents));
  }, [documents, fetchProjectArray]);

  const updateCursorPosition = useCallback((ev) => {
    setCursorPosition({ left: ev.clientX, top: ev.clientY });
  }, []);

  useEffect(() => {
    document.addEventListener('mousemove', updateCursorPosition);
    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
    };
  }, [updateCursorPosition]);

  return (
    <div className="page">
      <Cursor {...cursorPosition} />
      <video className="bg-video" autoPlay loop muted>
        <source src={BgVideo} type="video/mp4" />
      </video>
      <div className="portfolio-container">
        <SideBar />
        <ProjectGrid projectArray={projects} />
      </div>
    </div>
  );
};

export default App;
