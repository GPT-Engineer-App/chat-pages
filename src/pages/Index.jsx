import React from "react";
import { ChakraProvider, Box, VStack, Text, Input, Button, IconButton, Flex, Spacer, Avatar, theme } from "@chakra-ui/react";
import { FaUserCircle, FaSearch, FaPaperPlane } from "react-icons/fa";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Login = () => {
  return (
    <VStack spacing={4}>
      <Input placeholder="Username" />
      <Input placeholder="Password" type="password" />
      <Button colorScheme="blue">Login</Button>
    </VStack>
  );
};

const Contacts = () => {
  const contacts = ["Alice", "Bob", "Charlie"]; // Example contacts
  return (
    <VStack spacing={4}>
      {contacts.map((contact, index) => (
        <Flex key={index} p={2} w="100%" borderWidth="1px" borderRadius="lg" alignItems="center">
          <Avatar name={contact} />
          <Text ml={2}>{contact}</Text>
          <Spacer />
          <Link to={`/chat/${contact}`}>
            <IconButton icon={<FaUserCircle />} aria-label={`Chat with ${contact}`} />
          </Link>
        </Flex>
      ))}
    </VStack>
  );
};

const Chat = ({ match }) => {
  const { contactName } = match.params;
  return (
    <VStack spacing={4}>
      <Text fontSize="2xl">Chat with {contactName}</Text>
      <VStack spacing={4} w="100%">
        {/* Example messages */}
        <Text alignSelf="flex-start">Hello</Text>
        <Text alignSelf="flex-end">Hi there!</Text>
      </VStack>
      <Flex w="100%">
        <Input placeholder="Type a message" />
        <IconButton icon={<FaPaperPlane />} aria-label="Send message" />
      </Flex>
    </VStack>
  );
};

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/chat/:contactName" element={<Chat />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
};

export default App;
