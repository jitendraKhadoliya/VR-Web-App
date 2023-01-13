import { Box, Container, Heading ,Image, Stack ,Text } from "@chakra-ui/react";
import React from "react";
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../Assets/1.jpg';
import img2 from '../Assets/2.jpg';
import img3 from '../Assets/3.jpg';
import img4 from '../Assets/4.jpg';
import img5 from '../Assets/5.png';


const headingOptions = {
    pos : "absolute",
    left : "50%",
    top : "50%",
    transform: "translate(-50%,-50%)",
    textTransform : "uppercase",
    p : "4",
    size:"3xl"
}

const Header = ()=>{

    return(
        <>
        <Box>
            <MyCarousel />

            <Container minH={"100vh"} maxWidth={'container.lg'}>

             <Heading textTransform={"uppercase"} w={"fit-content"} borderBottom ={"2px solid"} paddingTop={'4'} margin = {"auto"} >Services</Heading>

                <Stack h={"full"} alignItems={'center'} direction={['column','row']} > 
                    <Image src={img5} h = {['40', '400']} filter ={"hue-rotate(-130deg)"} />
                    <Text letterSpacing={"widest"} lineHeight ={"190%"} p={['4','16']} textAlign="center">
                    Welcome to VR Oasis, the ultimate virtual reality destination for immersive entertainment and education. Our platform offers a wide range of interactive experiences, from thrilling adventures to relaxing escapes. Whether you want to explore exotic locations, attend virtual concerts, or learn something new, VR Oasis has something for everyone. You can also upload your own videos and share them with the world. Our user-friendly interface makes it easy to navigate and discover new content, and our state-of-the-art technology ensures a smooth and seamless VR experience. Sign up now and escape into the world of VR Oasis.
                    </Text>
                        
                </Stack>
            </Container>
        </Box>
        </>
    )
}


const MyCarousel = ()=>{

    return( <Carousel autoPlay infiniteLoop interval={1000} showStatus={false} showThumbs={false} showArrows={false}>

        <Box w={"full"} h={"100vh"}>
            <Image src={img1} h={"full"} w={"full"} objectFit={"cover"} />
            <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions} >Watch The Future</Heading>
        </Box>        

        <Box w={"full"} h={"100vh"}>
            <Image src = {img2} />
            <Heading bgColor={"whiteAlpha.900"} color={"black"} {...headingOptions} >Future Gaming</Heading>
        </Box>

        <Box w={"full"} h ={"100vh"}>
            <Image src={img3} h={"full"} w={"full"} objectFit = {"cover"}  />
            <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>Gaming on consoule</Heading>
        </Box>

        <Box w={"full"} h ={"100vh"}>
            <Image src= {img4} />
            <Heading bgColor={"blackAlpha.600"} color={"white"}  {...headingOptions}>Full Night Gaming</Heading>
        </Box>

    </Carousel>
    )
}

export default Header;
