import { ArrowBackIcon } from "@chakra-ui/icons";
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useParams, Link } from "react-router-dom";

const PostDetails = ({ isLoading, fetchError, posts, handleDelete }) => {
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);
  return (
    <Box w="full">
      {post && (
        <>
          <Flex direction="column" p={3}>
            <Text textAlign="left" mb={3} color="teal">
              <ArrowBackIcon mr={1} />
              <Link to="/">Back</Link>
            </Text>
            <Text fontSize="25px" fontWeight="bold">
              {post.title}
            </Text>
            <Text color="gray.500" fontSize="14px">
              {post.date}
            </Text>
            <Text color="gray.700" fontSize="18px" mt={4}>
              {post.description}
            </Text>
            <Button
              colorScheme="red"
              my={6}
              w="20%"
              textAlign="right"
              onClick={() => handleDelete(id)}
            >
              Delete
            </Button>
          </Flex>
        </>
      )}
      {fetchError && (
        <Alert status="error" variant="left-accent">
          <AlertIcon />
          {`${fetchError}`}
        </Alert>
      )}
      {isLoading && (
        <Alert status="info" variant="left-accent">
          <AlertIcon />
          Post is loading..., Please be patient!
        </Alert>
      )}
      {!post && !isLoading && !fetchError && (
        <Flex direction="column" textAlign="center" my={10}>
          <Heading size="lg">Oops! Post Not Found</Heading>
          <Text color="gray.700" fontSize="18px">
            Well, that's disappointing.
          </Text>
          <Text color="teal" fontSize="16px" mt={4}>
            <Link to="/">Visit our homepage</Link>
          </Text>
        </Flex>
      )}
    </Box>
  );
};

export default PostDetails;
