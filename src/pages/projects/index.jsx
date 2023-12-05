import './style.css'
import React from 'react';
import { ThemeContext } from "../../theme";
import ProjectCard from "../../components/project-card";
import stream from "../../assets/projects/streamme_up.png"


const Projects = () => {
    const theme = React.useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    return (
        <>
            <div>
                <ProjectCard name="test" description="lorem ipsum adsasda da das adsadasd ada da" url="https://versecrypto.netlify.app" img={stream} />
            </div>
            <div className={darkMode ? 'projects__container container-dark' : 'projects__container container-light'}>
                <a style={{ paddingBottom: '35px' }} className={darkMode ? 'App-link' : 'App-link light'} href='https://teletrabajo.app' target='_blank' rel="noreferrer"> Real 100% Remote roles offers posting site</a>
                <a style={{ paddingBottom: '35px' }} className={darkMode ? 'App-link' : 'App-link light'} href='https://marketplace.visualstudio.com/items?itemName=thesolutioners.testwizard' target='_blank' rel="noreferrer">TestWizard - AI unit test generation</a>
                <a style={{ paddingBottom: '35px' }} className={darkMode ? 'App-link' : 'App-link light'} href='https://stream-me-up.netlify.app' target='_blank' rel="noreferrer">webRTC - Live video chat app</a>
                <a style={{ paddingBottom: '35px' }} className={darkMode ? 'App-link' : 'App-link light'} href='https://versecrypto.netlify.app' target='_blank' rel="noreferrer">CryptoVerse - Crypto information site</a>
                <a style={{ paddingBottom: '35px' }} className={darkMode ? 'App-link' : 'App-link light'} href='https://minecraft-be.netlify.app' target='_blank' rel="noreferrer">Minecraft clone - Browser edition</a>
                <a style={{ paddingBottom: '35px' }} className={darkMode ? 'App-link' : 'App-link light'} href='https://dtellz.github.io/self-driving-car/' target='_blank' rel="noreferrer">Self driving car - Reinforcement learning</a>
            </div>
        </>
        
    )
}


export default Projects;