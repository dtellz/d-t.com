import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import DarkModeSwitcher from '../../components/darkmode-switcher';
import { ThemeContext } from "../../theme";


import './style.css';

const Header = () => {
    const theme = React.useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return (
        <Box sx={{ flexGrow: 1 }} >
            <AppBar position="fixed" sx={darkMode ? { backgroundColor: '#0f0f0f', top: 'auto', bottom: 0 } : { backgroundColor: 'white', top: 'auto', bottom: 0 }}>
                <Toolbar sx={darkMode ? { backgroundColor: 'black' } : { backgroundColor: 'gray' }} className={darkMode ? 'header__container' : 'header__container-light'}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
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