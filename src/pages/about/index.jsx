import './style.css'
import React from 'react';
import { ThemeContext } from "../../theme";
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import esImg from '../../assets/language/es-lang.webp'
import enImg from '../../assets/language/en-lang.webp'

const About = () => {
    const theme = React.useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    const [traduction, setLanguage] = useTranslation('global');

    const switchLanguageES = () => {
        setLanguage.changeLanguage('es')
    }
    const switchLanguageEN = () => {
        setLanguage.changeLanguage('en')
    }

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
        <motion.div 
            className={darkMode ? 'about__container container-dark' : 'about__container container-light'} 
            style={{ overflowY: "auto", paddingTop: '114px' }}
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <motion.div 
                className='about__lang-btns'
                variants={itemVariants}
            >
                <motion.img 
                    onClick={switchLanguageES} 
                    alt='es_language' 
                    src={esImg} 
                    height='25' 
                    width='25' 
                    className='about__btn'
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                />
                <motion.img 
                    onClick={switchLanguageEN} 
                    alt='en_language' 
                    src={enImg} 
                    height='25' 
                    width='25' 
                    className='about__btn'
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                />
            </motion.div>

            <motion.div 
                className="about__content"
                variants={itemVariants}
            >
                <h1 className='about__title gradient-text'>
                    {traduction("about.title")}
                </h1>

                <div className='about__text-container'>
                    <motion.div 
                        className='about__text about__intro'
                        variants={itemVariants}
                    >
                        {traduction("about.intro")}
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default About;