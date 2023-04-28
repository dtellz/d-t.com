import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Popover from '@mui/material/Popover';
import MenuIcon from '@mui/icons-material/Menu';
import DarkModeSwitcher from '../../components/darkmode-switcher';
import { Link } from 'react-router-dom';
import { ThemeContext } from "../../theme";
import { useTranslation } from 'react-i18next';

import './style.css';

const Header = () => {
    const theme = React.useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    const [traduction, setLanguage] = useTranslation('global')
    // const navigate = useNavigate();
    /**
     * MENU ELEMENTS
     */
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;


    // END OF MENU ELEMENTS
    return (
        <Box sx={{ flexGrow: 1 }} >
            <AppBar position="fixed" sx={darkMode ? { borderRadius: '15px', backgroundColor: '#0f0f0f', top: 'auto', bottom: 0 } : { backgroundColor: '#ffffff', borderRadius: '150px', border: 'none', top: 'auto', bottom: 0 }}>
                <Toolbar sx={darkMode ? { backgroundColor: 'black' } : { backgroundColor: '#c7c7c7' }} className={darkMode ? 'header__container' : 'header__container-light'}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        aria-describedby={id}
                        onClick={handleClick}
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Popover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'center',
                            horizontal: 'center',
                        }}
                        transformOrigin={{
                            vertical: 'center',
                            horizontal: 'center',
                        }}
                    >
                        <div className={darkMode ? 'header__menu menu-dark' : 'header__menu menu-light'}>
                            <Link onClick={handleClose} to='/home' className={darkMode ? 'link-dark' : 'link-light'}>{traduction("menu.home")}</Link>
                            <Link onClick={handleClose} to='/projects' className={darkMode ? 'link-dark' : 'link-light'}>{traduction("menu.projects")}</Link>
                            <Link onClick={handleClose} to='/about' className={darkMode ? 'link-dark' : 'link-light'}>{traduction("menu.about")}</Link>
                        </div>
                    </Popover>


                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {/* News */}
                    </Typography>
                    <DarkModeSwitcher />
                </Toolbar>
            </AppBar>
        </Box>
    );
}


export default Header;