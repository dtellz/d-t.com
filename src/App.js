import './App.css';
import React, { useContext } from "react";
import { ThemeContext } from './theme.js';
import Landing from './pages/landing';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;



  return (
    <Router>
      <Routes>
        <Route path='/home' element={<Landing />}></Route>
        <Route path='*' element={<Landing />}></Route>

      </Routes>
    </Router>
  );
}

export default App;
