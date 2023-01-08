import logo from '../../assets/softwareDev.webp';
import './style.css';
import React, { useContext, useState } from "react";
import { ThemeContext } from "../../theme";
import { useTranslation } from 'react-i18next';
import esImg from '../../assets/language/es-lang.webp'
import enImg from '../../assets/language/en-lang.webp'
import { Link } from 'react-router-dom';
import { ReCAPTCHA } from 'react-google-recaptcha';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};


function Landing() {

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    let subtitle;

    const [traduction, setLanguage] = useTranslation('global')
    const [humanVerified, setHumanVerified] = useState(false);
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    const switchLanguageES = () => {
        setLanguage.changeLanguage('es')
    }
    const switchLanguageEN = () => {
        setLanguage.changeLanguage('en')
    }

    const verifyHumanUser = () => {
        console.log('user Is human!')
    }

    function onChange(value) {
        console.log("Captcha value:", value);
    }

    return (
        <div className="App">

            <header className={darkMode ? 'App-header-dark' : 'App-header-light'}>
                <img src={logo} className="App-logo" alt="logo" />
                <div className='landing__textBlock'>
                    <p className="landing__career landing__text">
                        {traduction("landing.title")}
                    </p>
                    {!humanVerified ? <p onClick={openModal} className={darkMode ? 'App-link' : 'App-link light'}>{traduction("landing.download")} CV</p> :
                        <Link className={darkMode ? 'App-link' : 'App-link light'} to='/files/DiegoTellezCV.pdf' target="_blank" download ><p className='landing__text'>{traduction("landing.download")} CV</p></Link>}

                    <Modal
                        isOpen={modalIsOpen}
                        ariaHideApp={false}
                        onAfterOpen={afterOpenModal}
                        onRequestClose={closeModal}
                        style={customStyles}
                        contentLabel="Example Modal"
                    >
                        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
                        <script src="https://www.google.com/recaptcha/api.js" async defer></script>
                        <ReCAPTCHA
                            sitekey="6LdvuN8jAAAAABSTgcniKXjNKTzrsdLvxeunQ-5K"
                            onChange={onChange}
                        />
                    </Modal>

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


            </header>
        </div >
    );
}

export default Landing;
