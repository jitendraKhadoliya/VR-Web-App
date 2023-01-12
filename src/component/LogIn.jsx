import { Button, Container, Heading, Input, VStack ,Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';

const LogIn = () => {
  return (
   <Container minH={'100vh'} maxWidth={'container.md'}  >
        <form>
            <VStack alignItems={'stretch'} w={['full','96']} m={'auto'} my={"16"} spacing='8'>

                <Heading>Welcome Back</Heading>
                <Input placeholder='enter your email' type={'email'} required focusBorderColor='purple.500' />
                <Input placeholder='enter your password' type ={'password'} required focusBorderColor={'purple.500'} /> 

                <Button alignSelf={'flex-end'} variant='link' borderBottom={'1px solid white'} > 
                <Link to ={'/forgotpassword'} > Forgot Password ?</Link>
                </Button>

                <Button colorScheme={'purple'} type='submit' >Log In</Button>

                <Text textAlign={'right'}> New User?  
                <Button colorScheme={'purple'} variant='link' borderBottom={'1px solid white'} >  

                    {/* adding Link inside th Button */}
                    <Link to={'/signup'}  >Sign Up</Link>

                 </Button>
                </Text>
            </VStack>

        </form>

   </Container>

   
  )
}

export default LogIn;