import { useEffect } from 'react';
import Lenis from 'lenis';
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
import Grain from './components/Grain';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <>
      <Grain />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Stats />
        <AIProjects />
        <NextRole />
        <Experience />
        <ClientUserGroups />
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
