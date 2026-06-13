import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { ProjectDetail } from './pages/ProjectDetail';
import { CustomCursor } from './components/CustomCursor';
import data from './data';
import './App.css';

function HomePage() {
  const location = useLocation();

  useEffect(() => {
    const hash = (location.state as { scrollTo?: string } | null)?.scrollTo;
    if (hash) {
      setTimeout(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    }
  }, [location]);

  return (
    <>
      <Hero name={data.name} tagline={data.tagline} />
      <About bio={data.bio} bio2={data.bio2} />
      <Experience experiences={data.experiences} />
      <Projects projects={data.projects} />
      <Skills skills={data.skills} />
      <Contact
        email={data.email}
        phone={data.phone}
        github={data.github}
        linkedin={data.linkedin}
      />
    </>
  );
}

function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:slug" element={<ProjectDetail projects={data.projects} />} />
      </Routes>
    </>
  );
}

export default App;
