import logo from '../../assets/softwareDev.webp';
import './style.css';
import React, { useContext } from "react";
import { ThemeContext } from "../../theme";
import { useTranslation } from 'react-i18next';
import esImg from '../../assets/language/es-lang.webp'
import enImg from '../../assets/language/en-lang.webp'
import { Link } from 'react-router-dom';




function Landing() {

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;


    const [traduction, setLanguage] = useTranslation('global')

    const switchLanguageES = () => {
        setLanguage.changeLanguage('es')
    }
    const switchLanguageEN = () => {
        setLanguage.changeLanguage('en')
    }



    return (
        <div className="App">

            <header className={darkMode ? 'App-header-dark' : 'App-header-light'}>
                <img src={logo} className="App-logo" alt="logo" />
                <div className='landing__textBlock'>
                    <p className="landing__career landing__text">
                        {traduction("landing.title")} <a
                            className={darkMode ? 'App-link' : 'App-link light'}
                            href="https://stuart.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {traduction("landing.company")}
                        </a>
                    </p>
                    <Link className={darkMode ? 'App-link' : 'App-link light'} to='/files/DiegoTellezCV.pdf' target="_blank" download ><p className='landing__text'>{traduction("landing.download")} CV</p></Link>
                    <p className='landing__text'>{traduction("landing.projects")} <a
                        className={darkMode ? 'App-link' : 'App-link light'}
                        href="https://github.com/dtellz"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {traduction("landing.github")}
                    </a> </p>

                    <p className='landing__text'>{traduction("landing.profile")} <a
                        className={darkMode ? 'App-link' : 'App-link light'}
                        href="https://www.linkedin.com/in/diegotellezbarrero/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </a> </p>
                </div>


                <div className='landing__lang-btns'>
                    <img onClick={switchLanguageES} alt='es_language' src={esImg} height='25' width='25' className='landing__btn'></img>
                    <img onClick={switchLanguageEN} alt='en_language' src={enImg} height='25' width='25' className='landing__btn'></img>
                </div>


            </header>
        </div >
    );
}

export default Landing;
