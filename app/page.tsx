import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Contact from '@/components/Contact';
import Hero from '@/components/Hero';
import Education from '@/components/Education';
import Projects from '@/components/Projects';
import Role from '@/components/Role'
import TechStack from '@/components/TechStack'
import Career from '@/components/Career'
import SkillBars from '@/components/SkillBars';


function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <Career />
    <Education />
    <Role />
    <Projects />
    <TechStack />
    <SkillBars />
    <Contact />
    <Footer />
    </>
  );
}

export default App;