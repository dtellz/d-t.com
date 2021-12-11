import logo from '../src/assets/gif/in-progress.gif';
import './App.css';
import React, { useContext } from "react";
import { ThemeContext } from "./theme";
import Header from './components/header';
import { useTranslation } from 'react-i18next';
import IconButton from '@mui/material/IconButton';
import esImg from './assets/language/es-lang.png'
import enImg from './assets/language/en-lang.png'

function App() {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const [traduction, setLanguage] = useTranslation('global')

  const switchLanguageES = () => {
    setLanguage.changeLanguage('es')
    /*    setAnchorEl3(null); */
  }
  const switchLanguageEN = () => {
    setLanguage.changeLanguage('en')
    /*     setAnchorEl3(null); */
  }

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
        <div className='landing__lang-btns'>
          <img onClick={switchLanguageES} alt='es_language' src={esImg} height='25' width='25'></img>
          <img onClick={switchLanguageEN} alt='en_language' src={enImg} height='25' width='25'></img>
        </div>



      </header>
    </div>
  );
}

export default App;
