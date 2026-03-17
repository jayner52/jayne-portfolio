import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Experience from './components/Experience';
import ClientUserGroups from './components/ClientUserGroups';
import AIProjects from './components/AIProjects';
import NextRole from './components/NextRole';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Community from './components/Community';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

function App() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Stats />
        <NextRole />
        <Experience />
        <ClientUserGroups />
        <AIProjects />
        <Skills />
        <Certifications />
        <Education />
        <Community />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}

export default App;
