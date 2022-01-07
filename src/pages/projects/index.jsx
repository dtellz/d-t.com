import './style.css'
import React from 'react';
import { ThemeContext } from "../../theme";


const Projects = () => {
    const theme = React.useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className={darkMode ? 'about__container container-dark' : 'about__container container-light'}>

            <a className={darkMode ? 'App-link' : 'App-link light'} href='https://stream-me-up.netlify.app'>webRTC - Live video chat app</a>
            <a className={darkMode ? 'App-link' : 'App-link light'} href='https://versecrypto.netlify.app'>CryptoVerse - Cryptocurrencies information site</a>



        </div>
    )
}


export default Projects;