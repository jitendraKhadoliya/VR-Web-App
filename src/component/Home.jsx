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
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet dolorem placeat quam distinctio, delectus fugiat tenetur aspernatur sint saepe, dignissimos recusandae neque vel ea ad possimus. Ipsum labore eveniet, velit voluptas quaerat, eius veritatis nostrum ut nam maiores, consequuntur reprehenderit. Amet officia quo molestias modi quos harum soluta fugit nulla sit vitae, fuga impedit recusandae dignissimos nesciunt voluptas eveniet fugiat odio iure ab inventore. Sunt quia optio voluptatem quam officia! Et ex quam, esse modi quo omnis cum quibusdam, nisi ratione iure quasi quae iste reiciendis ducimus recusandae necessitatibus asperiores. Quos nesciunt commodi obcaecati fugit eos, cum molestiae alias asperiores?
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
