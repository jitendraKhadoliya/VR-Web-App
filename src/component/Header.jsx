import React from "react";
import {Drawer,DrawerBody,DrawerHeader,DrawerContent,DrawerOverlay,DrawerCloseButton,Button, useDisclosure, VStack, HStack} from '@chakra-ui/react';
import {BiMenuAltLeft} from 'react-icons/bi';
import { Link } from "react-router-dom";


const Header = ()=>{

    const {isOpen ,onOpen ,onClose} = useDisclosure()


    return (<>
        <Button 
        zIndex={"overlay"}
        pos={'fixed'}
        top = {'4'}
        left = {'4'}
        colorScheme = "purple"
        h={'10'}
        w={'10'}
        p = {'0'}
        borderRadius = {"full"}
        onClick = {onOpen}

        >
        
        <BiMenuAltLeft size={'20'}/>
    </Button>

    <Drawer isOpen = {isOpen} placement ="left" onClose={onClose}>
    <DrawerOverlay/>
        <div>sadfsdk </div>
        <DrawerContent>
        <DrawerCloseButton/>
            <DrawerHeader>
                VR Videos 
            </DrawerHeader>
            <DrawerBody>



                <VStack alignItems={"flex-start"} >
                    <Button  onClick={onClose} variant={"ghost"} colorScheme ="purple" >
                        <Link to={'/'}>Home</Link>
                    </Button>
                    <Button onClick={onClose} variant={"ghost"} colorScheme = "purple" >
                        <Link to={'/videos'}>Videos</Link>
                    </Button>
                    <Button onClick={onClose} variant={"ghost"} colorScheme="purple" >
                        <Link to={'/videos?cateogry=free'}>Free Videos</Link>
                    </Button>
                    <Button onClick={onClose} variant={"ghost"} colorScheme = "purple" >
                        <Link to={'/upload'}>Upload Video</Link>
                    </Button>
                </VStack>

                <HStack pos={'absolute'}
                bottom={'10'}
                left ={'0.5'}
                width={'full'}
                justifyContent={"center"}
                >
                    <Button onClick={onClose} variant={'ghost'} colorScheme ={"purple"}>
                        <Link to={'/login'}>Log In</Link>
                    </Button>

                    <Button onClick={onClose} variant={'link'}>
                      <Link to={'/signup'}>Sign Up</Link>
                    </Button>
                </HStack>

            </DrawerBody>
        </DrawerContent>
    </ Drawer>
    
    </>
    )
}

export default Header;
