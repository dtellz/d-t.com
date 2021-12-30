import './style.css'
import React from 'react';
import { ThemeContext } from "../../theme";


const Projects = () => {
    const theme = React.useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className={darkMode ? 'about__container container-dark' : 'about__container container-light'}>
            <h1>I'd place my best deployed projects here soon...</h1>
        </div>
    )
}


export default Projects;