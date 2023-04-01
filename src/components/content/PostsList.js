import { Alert, AlertIcon, Box } from "@chakra-ui/react";
import Post from "./Post";

const PostsList = ({ posts, searchPost }) => {
  return (
    <Box overflowY="auto" mb={12} w="full">
      {posts.length ? (
        posts.map((post) => <Post key={post.id} post={post} />)
      ) : !posts.length && searchPost ? (
        <Alert status="info" variant="left-accent">
          <AlertIcon />
          Oops! No post matches your search. Try again
        </Alert>
      ) : (
        <Alert status="info" variant="left-accent">
          <AlertIcon />
          Post list is empty! try adding one.
        </Alert>
      )}
    </Box>
  );
};

export default PostsList;
