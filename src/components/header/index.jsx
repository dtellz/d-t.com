import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/hooks'
import './style.css'
import { useTranslation } from 'react-i18next';



import { useState } from "react"



const Header = () => {
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
            <input type='button' value={traduction("header.btn")} className='header__navigate-btn' onClick={onOpen} />
            <Drawer placement='top' onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader borderBottomWidth='1px' textAlign='center'>{traduction("header.title")}</DrawerHeader>
                    <DrawerBody>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default Header;