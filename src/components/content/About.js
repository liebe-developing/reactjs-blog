import {
  Box,
  Flex,
  Heading,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";

const About = () => {
  return (
    <Flex direction="column" w="full" p={6}>
      <Box mt={4}>
        <Heading size="lg">About us</Heading>
        <Text my={3} color="gray.600">
          This blog app is a practise for me to learn ReactJs
        </Text>
        <Text>I've used the following packages in this application:</Text>
        <UnorderedList mt={2}>
          <ListItem>
            React-router-dom for linking between different pages
          </ListItem>
          <ListItem>
            Chakra UI which is a simple, modular and accessible component
            library that gives you the building blocks you need to build your
            React applications.
          </ListItem>
          <ListItem>
            date-fns which is a modern JavaScript date utility library
          </ListItem>
        </UnorderedList>
      </Box>
    </Flex>
  );
};

export default About;
