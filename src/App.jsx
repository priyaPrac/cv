import React from 'react';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Navbar from './components/Navbar.jsx';
import Project from './components/Project.jsx';
import Skills from './components/Skills.jsx';

function App() {
  return (
      <main className="bg-gray-900 text-gray-400 body-font">
        <Navbar/>
        <About />
        <Project />
        <Skills />
        <Contact />
      </main>
  );
}

export default App;
