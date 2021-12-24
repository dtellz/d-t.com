import logo from '../../assets/softwareDev.png';
import './style.css';
import React, { useContext } from "react";
import { ThemeContext } from "../../theme";
import { useTranslation } from 'react-i18next';
import esImg from '../../assets/language/es-lang.png'
import enImg from '../../assets/language/en-lang.png'
import { Link } from 'react-router-dom';
import Header from '../../components/header';
/* import { GiForwardSun, GiMoonBats, GiHeraldicSun } from "react-icons/gi";
import { FaSun } from "react-icons/fa";
import { HiLightBulb } from "react-icons/hi"; */


function Landing() {

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
            <Header />
            <header className={darkMode ? 'App-header-dark' : 'App-header-light'}>
                <img src={logo} className="App-logo" alt="logo" />
                <div className='landing__textBlock'>
                    <p className="landing__career landing__text">
                        {traduction("landing.title")}
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
                {/* <IconButton borderRadius='50%' aria-label='dark mode switch' color='black' className={darkMode ? 'landing__darkMode-btn' : 'landing__darkMode-btn-light'} onClick={handleMode} icon={darkMode ? <SunIcon w={25} h={25} /> : <MoonIcon w={25} h={25} />} /> */}

            </header>
        </div >
    );
}

export default Landing;
