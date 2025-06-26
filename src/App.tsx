import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Skills from './components/Skills.tsx';
import Projects from './components/Projects.tsx';
import Experience from './components/Experience.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import ParticlesBackground from './components/ParticlesBackground.tsx';

const AppContainer = styled.div`
  min-height: 100vh;
  position: relative;
`;

const App: React.FC = () => {
  return (
    <AppContainer>
      <Helmet>
        <title>Shahid Zahoor - Frontend Developer</title>
        <meta name="description" content="Advanced Frontend Developer specializing in React, TypeScript, and modern web technologies." />
        <meta name="keywords" content="frontend developer, react, typescript, web development, portfolio" />
        <meta name="author" content="Shahid Zahoor" />
        <link rel="canonical" href="https://shahidzahoor.dev" />
      </Helmet>
      
      <ParticlesBackground />
      <Header />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </motion.div>
    </AppContainer>
  );
};

export default App; 