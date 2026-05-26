import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { ProjectDetail } from './pages/ProjectDetail';
import data from './data';
import './App.css';

function HomePage() {
  return (
    <>
      <Hero name={data.name} tagline={data.tagline} github={data.github} />
      <About bio={data.bio} bio2={data.bio2} stats={data.stats} />
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
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:slug" element={<ProjectDetail projects={data.projects} />} />
      </Routes>
    </>
  );
}

export default App;
