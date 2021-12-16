import logo from '../../assets/gif/in-progress.gif';
import './style.css';
import React, { useContext } from "react";
import { ThemeContext } from "../../theme";
import Header from '../../components/header';
import { useTranslation } from 'react-i18next';
import { Icon, IconButton } from '@chakra-ui/react'
import esImg from '../../assets/language/es-lang.png'
import enImg from '../../assets/language/en-lang.png'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { GiForwardSun, GiMoonBats, GiHeraldicSun } from "react-icons/gi";
import { FaSun } from "react-icons/fa";
import { HiLightBulb } from "react-icons/hi";

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
    const handleMode = () => {
        if (darkMode)
            theme.dispatch({ type: "LIGHTMODE" });
        else
            theme.dispatch({ type: "DARKMODE" });
    }


    return (
        <div className="App">
            <header className={darkMode ? 'App-header-dark' : 'App-header-light'}>
                <Header className='landing__header-nav-btn' />
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    {traduction("landing.welcome")} diego-tellez.com
                </p>
                <p className="landing__career">
                    {traduction("landing.title")}
                </p>
                <p>{traduction("landing.projects")} <a
                    className={darkMode ? 'App-link' : 'App-link light'}
                    href="https://github.com/dtellz"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {traduction("landing.github")}
                </a> </p>

                <p>{traduction("landing.profile")} <a
                    className={darkMode ? 'App-link' : 'App-link light'}
                    href="https://www.linkedin.com/in/diegotellezbarrero/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    LinkedIn
                </a> </p>
                <div className='landing__lang-btns'>
                    <img onClick={switchLanguageES} alt='es_language' src={esImg} height='25' width='25' className='landing__btn'></img>
                    <img onClick={switchLanguageEN} alt='en_language' src={enImg} height='25' width='25' className='landing__btn'></img>
                </div>
                <IconButton borderRadius='50%' aria-label='dark mode switch' color='black' className={darkMode ? 'landing__darkMode-btn' : 'landing__darkMode-btn-light'} onClick={handleMode} icon={darkMode ? <HiLightBulb className='darkmode__icon' /> : <GiMoonBats className='darkmode__icon' />} />
                {/*                 <IconButton borderRadius='50%' aria-label='dark mode switch' color='black' className={darkMode ? 'landing__darkMode-btn' : 'landing__darkMode-btn-light'} onClick={handleMode} icon={darkMode ? <Icon w={25} h={25} as={HiLightBulb} /> : <Icon w={30} h={30} as={GiMoonBats} />} /> */}
            </header>
        </div>
    );
}

export default Landing;
