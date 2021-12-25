import React from "react";
import Landing from './pages/landing';
import About from './pages/about'
import Header from './components/header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {


  return (

    <Router>
      <Header />
      <Routes>
        <Route path='/home' element={<Landing />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='*' element={<Landing />}></Route>

      </Routes>
    </Router>
  );
}

export default App;
