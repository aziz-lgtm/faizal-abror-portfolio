import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Contact from '@/components/Contact';
import Hero from '@/components/Hero';
import Education from '@/components/Education';
import Projects from '@/components/Projects';
import WhatIDo from '@/components/WhatIDo'
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
    <WhatIDo />
    <Projects />
    <TechStack />
    <SkillBars />
    <Contact />
    <Footer />
    </>
  );
}

export default App;