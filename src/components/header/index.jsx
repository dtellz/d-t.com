import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,

} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/hooks'
import './style.css'
import { useTranslation } from 'react-i18next';
import { ThemeContext } from "../../theme";
import { useContext } from 'react';
import { useState } from "react"



const Header = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    const [traduction] = useTranslation('global');
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = useState('right')

    return (
        <>
            {/*    <RadioGroup defaultValue={placement} onChange={setPlacement}>
                <Stack direction='row' mb='4'>
                    <Radio value='top'>Top</Radio>
                    <Radio value='right'>Right</Radio>
                    <Radio value='bottom'>Bottom</Radio>
                    <Radio value='left'>Left</Radio>
                </Stack>
            </RadioGroup> */}
            <input type='button' value={traduction("header.btn")} className={darkMode ? 'header__navigate-btn' : 'header__navigate-btn header__light'} onClick={onOpen} />
            <Drawer placement='top' onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader className={darkMode ? 'header__drawer-header' : 'header__drawer-header-light'} borderBottomWidth='1px' textAlign='center'>{traduction("header.title")}</DrawerHeader>
                    <DrawerBody className={darkMode ? 'header__drawer-body' : 'header__drawer-body-light'} >
                        <p>Content coming soon...</p>
                        <p>Content coming soon...</p>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default Header;