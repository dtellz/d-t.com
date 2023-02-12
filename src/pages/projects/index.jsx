import './style.css'
import React from 'react';
import { ThemeContext } from "../../theme";


const Projects = () => {
    const theme = React.useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className={darkMode ? 'projects__container container-dark' : 'projects__container container-light'}>
            <a style={{ paddingBottom: '35px' }} className={darkMode ? 'App-link' : 'App-link light'} href='https://stream-me-up.netlify.app'>webRTC - Live video chat app</a>
            <a style={{ paddingBottom: '35px' }} className={darkMode ? 'App-link' : 'App-link light'} href='https://versecrypto.netlify.app'>CryptoVerse - Crypto information site</a>
            <a style={{ paddingBottom: '35px' }} className={darkMode ? 'App-link' : 'App-link light'} href='https://minecraft-be.netlify.app'>Minecraft clone - Browser edition</a>
            <a style={{ paddingBottom: '35px' }} className={darkMode ? 'App-link' : 'App-link light'} href='https://dtellz.github.io/self-driving-car/'>Self driving car - Reinforcement learning</a>
        </div>
    )
}


export default Projects;