import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Education from './components/Education.jsx';
import Faq from './components/Faq.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import { tech } from './data.js';

export default function App() {
  const strip = [...tech, ...tech];
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="mq" aria-hidden="true">
          <div>{strip.map((t, i) => <span key={i}>{t}<i>✦</i></span>)}</div>
        </div>
        <About />
        <Skills />
        <Projects />
        <Education />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
