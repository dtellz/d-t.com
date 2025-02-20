import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Popover from '@mui/material/Popover';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import DarkModeSwitcher from '../../components/darkmode-switcher';
import { Link } from 'react-router-dom';
import { ThemeContext } from "../../theme";
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

import './style.css';

const Header = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const theme = React.useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    const [traduction] = useTranslation('global');
    
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setIsOpen(!isOpen);
    };

    const handleClose = () => {
        setIsOpen(!isOpen);
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const menuItems = [
        { path: '/home', label: traduction('nav.home') },
        { path: '/about', label: traduction('nav.about') },
        { path: '/projects', label: traduction('nav.projects') }
    ];

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar 
                position="fixed" 
                sx={{
                    ...darkMode 
                        ? { 
                            backgroundColor: '#0f0f0f',
                            borderRadius: '15px',
                            backdropFilter: 'blur(10px)',
                        } 
                        : { 
                            backgroundColor: 'rgba(255, 255, 255, 0.8)',
                            borderRadius: '15px',
                            backdropFilter: 'blur(10px)',
                        },
                    top: 0,
                    bottom: 'auto',
                    transition: 'all 0.3s ease',
                    boxShadow: darkMode 
                        ? '0 -4px 6px rgba(0, 0, 0, 0.1)' 
                        : '0 -4px 6px rgba(0, 0, 0, 0.05)'
                }}
            >
                <Toolbar 
                    className={darkMode ? 'header__container' : 'header__container-light'}
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '0.5rem 1rem',
                        position: 'relative',
                    }}
                >
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        style={{ zIndex: 2 }}
                    >
                        <IconButton
                            size="large"
                            edge="start"
                            color={darkMode ? 'inherit' : 'primary'}
                            aria-label="menu"
                            aria-describedby={id}
                            onClick={handleClick}
                            sx={{
                                mr: 2,
                                transition: 'transform 0.3s ease',
                                transform: isOpen ? 'rotate(90deg)' : 'none'
                            }}
                        >
                            {isOpen ? <CloseIcon /> : <MenuIcon />}
                        </IconButton>
                    </motion.div>

                    <Typography 
                        variant="h6" 
                        component={Link} 
                        to="/home"
                        className={darkMode ? 'header__title-dark' : 'header__title-light'}
                        sx={{ 
                            position: 'absolute',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            textDecoration: 'none',
                            fontWeight: 600,
                            letterSpacing: '0.5px',
                            zIndex: 1
                        }}
                    >
                        Diego Tellez
                    </Typography>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        style={{ zIndex: 2 }}
                    >
                        <DarkModeSwitcher />
                    </motion.div>

                    <AnimatePresence>
                        <Popover
                            id={id}
                            open={open}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            transformOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            PaperProps={{
                                sx: {
                                    backgroundColor: darkMode ? '#1a1a1a' : '#fff',
                                    borderRadius: '15px',
                                    mt: -2,
                                    boxShadow: darkMode 
                                        ? '0 4px 6px rgba(0, 0, 0, 0.2)' 
                                        : '0 4px 6px rgba(0, 0, 0, 0.1)',
                                }
                            }}
                        >
                            <Box sx={{ p: 2, minWidth: '200px' }} className={darkMode ? 'container-dark' : 'container-light'}>
                                {menuItems.map((item, index) => (
                                    <motion.div
                                        key={item.path}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <Link
                                            to={item.path}
                                            onClick={handleClose}
                                            style={{
                                                textDecoration: 'none',
                                                color: darkMode ? '#fff' : '#000',
                                                display: 'block',
                                                padding: '0.5rem 1rem',
                                                margin: '0.5rem 0',
                                                borderRadius: '8px',
                                                transition: 'all 0.3s ease',
                                                backgroundColor: darkMode ? '#2d2d2d' : '#f5f5f5',
                                                position: 'relative',
                                                overflow: 'hidden'
                                            }}
                                            className="nav-link"
                                        >
                                            {item.label}
                                        </Link>
                                    </motion.div>
                                ))}
                            </Box>
                        </Popover>
                    </AnimatePresence>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;