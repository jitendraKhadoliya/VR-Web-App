import { Box, VStack ,Stack, Heading, HStack, Button, Input ,Text } from "@chakra-ui/react";
import React from "react";
import {AiOutlineSend} from 'react-icons/ai';
import { Link } from "@chakra-ui/react";


const Footer =()=>{
    return <Box minH={'40'} bgColor={"blackAlpha.900"}  color = {"white"} p ="16">
        <Stack direction={['column','row']}>
            <VStack alignItems={"stretch"} w={"full"} px={"4"}>
                <Heading textTransform={"capitalize"} size="md" textAlign={['center','left']}>
                    Subscribe to get updates
                </Heading>
 
                <HStack borderBottom={"2px solid white"} >
                    <Input placeholder="enter your email address" border={"none"} borderRadius={"none"} outline ={"none"} focusBorderColor={"none"} />
                    <Button variant={"ghost"} p="0" colorScheme={"purple"} borderRadius = {"0 20px 20px 0"}> 
                         <AiOutlineSend />
                     </Button>
                </HStack>

            </VStack>
            
            {/* here i create second v stack section */}

            <VStack 
            w={"full"} 
            borderLeft ={["none","1px solid white"]}
            borderRight ={["none","1px solid white"]}
            >
                <Heading textAlign={"center"} textTransform="uppercase" >VR videos</Heading>
                <Text>All Right Received</Text>
            </VStack>

            {/* here i create third v stack section */}

            <VStack w={"full"}>
                <Heading textTransform={"capitalize"} size={"md"}>Social media</Heading>

                <Button variant={Link} colorScheme="white">
                    <a target="blank"  href="https://github.com/jitendraKhadoliya">Github</a>
                </Button>

                <Button variant={Link} colorScheme="white">
                    <a target={"blank"} href="https://www.linkedin.com/in/jitendrakhadoliya/">Linkedin</a>
                </Button>

                <Button variant={Link} colorScheme="white">
                    <a target={"blank"} href="https://instagram.com/jitendra.khadoliya">Instagram</a>
                </Button>

            </VStack>



        </Stack>
    </Box>
}

export default Footer;

