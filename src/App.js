import logo from '../src/assets/gif/in-progress.gif';
import './App.css';
import React, { useContext } from "react";
import { ThemeContext } from "./theme";
import Header from './components/header';
import { useTranslation } from 'react-i18next';

function App() {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const [traduction] = useTranslation('global')

  return (
    <div className="App">
      <header className={darkMode ? 'App-header-dark' : 'App-header'}>
        <Header className='landing__header-nav-btn' />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {traduction("landing.welcome")} diego-tellez.com
        </p>
        <p className="landing__career">
          {traduction("landing.title")}
        </p>
        <p>{traduction("landing.projects")} <a
          className="App-link"
          href="https://github.com/dtellz"
          target="_blank"
          rel="noopener noreferrer"
        >
          {traduction("landing.github")}
        </a> </p>

        <p>{traduction("landing.profile")} <a
          className="App-link"
          href="https://www.linkedin.com/in/diegotellezbarrero/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a> </p>


      </header>
    </div>
  );
}

export default App;
