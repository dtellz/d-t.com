import './App.css';
import React, { useContext } from "react";
import { ThemeContext } from './theme.js';
import Landing from './pages/landing';

function App() {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;



  return (
    <Landing />
  );
}

export default App;
