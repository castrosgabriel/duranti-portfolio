import React, { useState, useEffect } from 'react';

import "./style/App.css";
import "./style/project-grid.css";

import Cursor from './components/Cursor';
import ProjectGrid from './components/ProjectGrid';
import SideBar from './components/SideBar';

import BgVideo from '../src/assets/video/bg-video.mp4';
import { useAllPrismicDocumentsByType } from '@prismicio/react';

const App = () => {
  const [cursorPosition, setCursorPosition] = useState({ left: 0, top: 0 });
  const [projects, setProjects] = useState([])

  const [documents] = useAllPrismicDocumentsByType('project-cover')

  const getProjectArray = (documents) => {
    if (documents) {
      return documents.map((doc) => {
        return {
          id: doc.uid,
          img: doc.data.cover.url,
          name: doc.data.title[0].text,
          link: doc.data.link.url
        }
      }).sort((a, b) => a.id - b.id);
    }
    return []
  }

  useEffect(() => {
    setProjects(getProjectArray(documents))
  }, [documents])

  useEffect(() => {

    document.addEventListener('mousemove', updateCursorPosition);

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);


  const updateCursorPosition = (ev) => {
    setCursorPosition({ left: ev.clientX, top: ev.clientY });
  };


  return (
    <div className="page">
      <Cursor {...cursorPosition} />
      <video className="bg-video" autoPlay loop muted>
        <source src={BgVideo} type="video/mp4" />
      </video>
      <div className="portfolio-container">
        <SideBar />
        <ProjectGrid imagesArray={projects} />
      </div>
    </div>
  );
};

export default App;
