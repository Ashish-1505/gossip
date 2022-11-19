import React, { useEffect } from 'react'
import {Box, Container,Text,Tab,Tabs,TabList,TabPanel,TabPanels} from "@chakra-ui/react";
import Login from '../components/authentication/Login';
import Signup from '../components/authentication/Signup';
import { useHistory } from 'react-router-dom';
const HomePage = () => {
    const history=useHistory();

    useEffect(() => {
        const user=JSON.parse(localStorage.getItem("userInfo"));
        if(user) history.push("/chats")

    }, [history])
    
  return (
    <Container maxW='xl' centerContent textAlign="center">
        <Box
            d="flex"
            justifyContent="center"
            p={3}
            bg={"white"}
            w="100%"
            m="40px 0 15px 0"
            borderRadius="lg"
            borderWidth="1px"
            
        >
            <Text fontSize="4xl" fontFamily="Work sans">
                Gossip
            </Text>
        </Box>
        <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px" >
            <Tabs variant='soft-rounded' colorScheme='green'>
                <TabList mb='1em'>
                    <Tab width="50%">Login</Tab>
                    <Tab width="50%">Sign Up</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                    <Login/>
                    </TabPanel>
                    <TabPanel>
                    <Signup/>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    </Container>
  )
}

export default HomePage
