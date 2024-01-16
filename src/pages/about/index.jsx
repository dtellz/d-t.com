import './style.css'
import React from 'react';
import { ThemeContext } from "../../theme";
import { useTranslation } from 'react-i18next';
import esImg from '../../assets/language/es-lang.webp'
import enImg from '../../assets/language/en-lang.webp'


const About = () => {
    const theme = React.useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    const [traduction, setLanguage] = useTranslation('global')

    const switchLanguageES = () => {
        setLanguage.changeLanguage('es')
    }
    const switchLanguageEN = () => {
        setLanguage.changeLanguage('en')
    }

    return (
        <div className={darkMode ? 'about__container container-dark' : 'about__container container-light'} style={{ "overflowY": "auto" }}>
            <div className='about__lang-btns' >
                <img onClick={switchLanguageES} alt='es_language' src={esImg} height='25' width='25' className='about__btn'></img>
                <img onClick={switchLanguageEN} alt='en_language' src={enImg} height='25' width='25' className='about__btn'></img>
            </div >
            <h1 className='about__text'>{traduction("about.title")}</h1>
            <h3 className='about__text'>{traduction("about.intro")}</h3>
            <h3 className='about__text'>{traduction("about.content")}</h3>
            <p>********************************</p>
            <h3 className='ach__text'>{traduction("about.achievements")}</h3>
            <ul className='about__list' >
                <li>
                    <h3 className='ach__text'>{traduction("about.ach1")} <a
                        className={darkMode ? 'App-link' : 'App-link light'}
                        href="https://www.youtube.com/watch?v=2fGHnM-I8Qs&t=57s"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {traduction("about.prelink")}
                    </a>{traduction("about.postlink")} </h3>
                </li>
                <li>
                    <h3 className='ach__text'>{traduction("about.ach2")}</h3>
                </li>
                <li>
                    <h3 className='ach__text'>{traduction("about.ach3")}</h3>
                </li>
                <li>
                    <h3 className='ach__text'>{traduction("about.ach4")}</h3>
                </li>
                <li>
                    <h3 className='ach__text'>{traduction("about.ach5")}</h3>
                </li>
            </ul>
        </div >
    )
}


export default About;