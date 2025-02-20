import logo from '../../assets/softwareDev.webp';
import './style.css';
import React, { useContext } from "react";
import { ThemeContext } from "../../theme";
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { GitHub, LinkedIn, Code } from '@mui/icons-material';

function Landing() {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    const [traduction] = useTranslation('global');

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <div className="App">
            <header className={darkMode ? 'App-header-dark' : 'App-header-light'}>
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="landing__content"
                >
                    <motion.div variants={itemVariants}>
                        <img src={logo} className="App-logo" alt="logo" />
                    </motion.div>

                    <motion.div 
                        variants={itemVariants}
                        className="landing__textBlock"
                    >
                        <h1 className="landing__title">
                            {traduction("landing.title")}
                        </h1>
                        
                    </motion.div>

                    <motion.div 
                        variants={itemVariants}
                        className="landing__social-links"
                    >
                        <a
                            href="https://github.com/dtellz"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`social-icon ${darkMode ? 'dark' : 'light'}`}
                        >
                            <GitHub />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/diegotellezbarrero/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`social-icon ${darkMode ? 'dark' : 'light'}`}
                        >
                            <LinkedIn />
                        </a>
                        <a
                            href="/projects"
                            className={`social-icon ${darkMode ? 'dark' : 'light'}`}
                        >
                            <Code />
                        </a>
                    </motion.div>
                </motion.div>
            </header>
        </div>
    );
}

export default Landing;
