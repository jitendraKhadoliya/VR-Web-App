import { Button, Container, Heading, Input, VStack ,Text, Avatar } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
   <Container minH={'100vh'} maxWidth={'container.md'}  >
        <form>
            <VStack alignItems={'stretch'} w={['full','96']} m={'auto'} my={"16"} spacing='8'>

                <Heading alignSelf={'center'} >VR VIDEOS</Heading>
                <Avatar alignSelf={'center'}  boxSize ={'32'}/>
                <Input placeholder='enter your first name' type={'text'} required focusBorderColor='purple.500' />
                <Input placeholder='enter your last name' type={'text'} required focusBorderColor='purple.500' />
                <Input placeholder='enter your email' type={'email'} required focusBorderColor='purple.500' />
                <Input placeholder='enter your password' type ={'password'} required focusBorderColor={'purple.500'} /> 

                {/* <Button alignSelf={'flex-end'} variant='link' > 
                <Link to ={'/forgotpassword'} > Forgot Password ?</Link>
                </Button> */}

                <Button colorScheme={'purple'} type='submit' >Log In</Button>

                <Text textAlign={'right'} > Already Signed Up? {" "} 
                <Button colorScheme={'purple'} variant='link' >  

                    {/* adding Link inside th BUtton */}
                    <Link to={'/login'}>Log In</Link>

                 </Button>
                </Text>
            </VStack>

        </form>

   </Container>

   
  )
}

export default SignUp