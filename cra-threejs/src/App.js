import AboutPage from './components/about/about';
import HomePage from './components/home/home';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import ProjectPage from './components/projects/Projects';
import ContactPage from './components/contact/contact';
import SkillsPage from './components/skills/skills';
import NavBar from './components/home/navbar';

function App() {
  return (
    <BrowserRouter >
      <NavBar classname="nav" />
      <Routes >
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
