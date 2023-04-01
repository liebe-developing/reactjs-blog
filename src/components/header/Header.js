import {
  Box,
  Button,
  ButtonGroup,
  Heading,
  Spacer,
  Flex,
} from "@chakra-ui/react";
import SearchForm from "./SearchForm";
import { Link } from "react-router-dom";

const Header = ({ searchPost, setSearchPost }) => {
  return (
    <Flex direction="column" w="100%">
      <Box bgColor="cyan" p={4}>
        <Heading>React Js Blog</Heading>
      </Box>
      <Box py={6} bgColor="blackAlpha.800">
        <Flex
          direction={{ base: "column", md: "row" }}
          alignItems="center"
          gap={{ base: "2", md: 0 }}
          minWidth="max-content"
        >
          <Box>
            <SearchForm searchPost={searchPost} setSearchPost={setSearchPost} />
          </Box>
          <Spacer />
          <ButtonGroup>
            <Link to="/">
              <Button colorScheme="cyan">Home</Button>
            </Link>
            <Link to="/post">
              <Button colorScheme="cyan">Post</Button>
            </Link>
            <Link to="/about">
              <Button colorScheme="cyan" mr={2}>
                About
              </Button>
            </Link>
          </ButtonGroup>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Header;
