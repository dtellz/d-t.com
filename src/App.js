import React from "react";
import Landing from './pages/landing';
import About from './pages/about';
import Projects from "./pages/projects";
import Header from './components/header';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {


  return (

    <Router>
      <Header />
      <Routes>
        <Route path='/home' element={<Landing />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='*' element={<Landing />} />

      </Routes>
    </Router>
  );
}

export default App;
