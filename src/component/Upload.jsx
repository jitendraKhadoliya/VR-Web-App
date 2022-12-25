import { Button, Container, HStack, Input, VStack} from "@chakra-ui/react";
import React from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";

const Upload = ()=>{
    return <Container maxWidth={['full','container.md']} h={"100vh"}  p={'16'}>
        <VStack justifyContent={'center'} h='full' color={'purple.500'}>

            <AiOutlineCloudUpload size={'10vmax'}/>
            <form>
                <HStack>
                    <Input type={'file'} css ={{
                        "&::file-selector-button" : {
                            border:"none",
                            height:"100%",
                            marginLeft:"-18px",
                            color:"purple",
                            backgroundColor:"white",
                            width :"calc(100% + 40px)",
                            cursor:'pointer'
                        }
                    }} />
                    <Button type='submit' colorScheme='purple' >Upload</Button>

                </HStack>
            </form>
        </VStack>
    </Container>
}

export default Upload;