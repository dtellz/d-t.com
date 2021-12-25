import './style.css'
import React from 'react';
import { ThemeContext } from "../../theme";


const About = () => {
    const theme = React.useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className={darkMode ? 'about__container container-dark' : 'about__container container-light'}>
            <h1>I am an About page!</h1>
            <h2>But I am not ready yet!!</h2>
        </div>

    )
}


export default About;