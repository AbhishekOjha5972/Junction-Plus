import React, { useContext, useReducer, useState } from 'react'
import {
    Box,
    Flex,
    Avatar,
    HStack,
    IconButton,
    useDisclosure,
    useColorModeValue,
    Image,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    VStack
} from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { Collapse, Center } from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon, SearchIcon, SmallCloseIcon } from '@chakra-ui/icons';
import { AiOutlineLogin, AiOutlineLogout } from 'react-icons/ai';
import { MdManageAccounts } from 'react-icons/md';
import { AuthContext } from '../Context/AuthContext/AuthContextProvider';
import { Link } from "react-router-dom"
import { signOut ,getAuth } from 'firebase/auth';
// import { app } from './FirebaseAuthentication';

//! COMPONENTS IMPORTS
import Login_Signup_Modal from './Login_Signup_Modal';
import Nav_Reducer from './Nav_Reducer';


const Nav_InicialState =
{
    login_logout_toggle_state: false,
    account_toggle_state: false
}


const Navbar = () => {
    const [Nav_State, dispatch] = useReducer(Nav_Reducer, Nav_InicialState)
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [loginToggle, setLoginToggle] = useState(false);
    const { state } = useContext(AuthContext)
    

    console.log(Nav_State.login_logout_toggle_state, 'this is the nav state')
    //? NAVBAR FUNCTIONS

    const Login_Toggle = () => {
        dispatch({ type: "LOGIN_TOGGLE", payload: { login_logout_toggle_state: true } })
    }
    const Logout_Toggle = () => {
        const auth = getAuth();
        signOut(auth)
        .then((res)=>console.log(res))
        .catch((err)=>console.log(err));

        dispatch({ type: "LOGOUT_TOGGLE", payload: { login_logout_toggle_state: false } })
    }

    console.log(state)

    //* RETURN AREA

    return (
        <div>
            <Box bg={useColorModeValue('black', 'white')} px={["5", "10", "12"]} border="2px solid blue" position="relative">
                <Flex h={12} alignItems={'center'} justifyContent={'space-between'}>

                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={() => isOpen ? onClose() : onOpen()}
                        bg='none'
                        color='blue'

                    />
                    <Box h={12} display="flex" justifyContent={'center'} alignItems={'center'} >
                        <Image src="https://i.ibb.co/fvW8PGm/logo-6.png" h="35px" display={["none", "none", "block"]} />
                        <Image src="https://i.ibb.co/ts842G5/logo-7.png" h='35px' display={{ md: 'none' }} />
                    </Box>
                    <HStack >
                        <InputGroup display={["none", "none", "block"]}>
                            <InputLeftElement
                                pointerEvents='none'
                                h="30px"

                                children={<SearchIcon color='gray.300' w={3} h={3} />}
                            />
                            <Input
                                w="200px"
                                h="30px"
                                display={["none", "none", "block"]}
                                color="white"
                                type='tel' placeholder='Search' />
                            <InputRightElement
                                pointerEvents='none'
                                h="30px"

                                children={<SmallCloseIcon color='gray.300' />}

                            />
                        </InputGroup>
                        <Box h={12} display="flex" justifyContent={'center'} alignItems={'center'} onClick={() => setLoginToggle(!loginToggle)} >
                            <Avatar size=" sm" src={"#"} h="35px" />
                        </Box>
                    </HStack>








                </Flex>
            </Box>
            <Collapse in={isOpen} animateOpacity display={{ md: 'none' }} >
                <Box display={isOpen ? "block" : "none"} bg='black' h="80px" w="100%" >
                    <Center display='flex' justifyContent="center" alignItems="center" border="1px solid red" h="100%">
                        <InputGroup border='none' borderBottom="1px solid gray" w={'85%'} display={{ md: 'none' }} >
                            <InputLeftElement
                                pointerEvents='none'
                                h="30px"

                                children={<SearchIcon color='gray.300' w={3} h={3} />}
                            />
                            <Input

                                h="30px"
                                display={{ md: 'none' }}
                                color="white"
                                type='tel' placeholder='Search'
                                border="none"
                                outline="none"
                                px={10}

                            />
                        </InputGroup>
                    </Center>
                </Box>
            </Collapse>

            {/* TODO:- Adding the Transition box for login / signin and account details option  */}
            <Collapse in={loginToggle} animateOpacity >
                <Box
                    // p='20px'
                    color='white'
                    mt='2'
                    bg='teal.500'
                    rounded='md'
                    shadow='md'
                    position="absolute"
                    right={["5", "10", "12"]}
                    opacity="0.6"
                    w="200px"

                >
                    <VStack>

                        {state.isAuth ?

                            <Button w="100%" rightIcon={<AiOutlineLogout />} colorScheme='blue' variant='outline' display="flex" justifyContent="space-between" alignItems="center" border="none" onClick={() => Logout_Toggle()}>
                                Logout
                            </Button>

                            :
                            <Button w="100%" rightIcon={<AiOutlineLogin />} colorScheme='blue' variant='outline' display="flex" justifyContent="space-between" alignItems="center" border="none" onClick={() => Login_Toggle()}>
                                Login
                            </Button>
                        }

                        <Link to="/account"  style={{width:"100%"}}>   
                        <Button w="100%" rightIcon={<MdManageAccounts />} colorScheme='blue' variant='outline' display="flex" justifyContent="space-between" alignItems="center" border="none">
                            Account
                        </Button>
                        </Link>
                    </VStack>
                </Box>
            </Collapse>

            {Nav_State.login_logout_toggle_state ? <Login_Signup_Modal /> : null}

        </div>
    )
}

export default Navbar