import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";

const PostForm = ({ title, setTitle, description, setDescription, onAdd }) => {
  return (
    <Box w="full" p={6}>
      <form onSubmit={onAdd}>
        <Text fontSize="24px " fontWeight="bold">
          New Post
        </Text>
        <FormControl my={3} isRequired>
          <FormLabel>Title</FormLabel>
          <Input
            type="text"
            placeholder="Title of the post"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </FormControl>
        <FormControl mb={8} isRequired>
          <FormLabel>Post</FormLabel>
          <Textarea
            placeholder="Write what's on your mind!"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />{" "}
        </FormControl>
        <Button colorScheme="whatsapp" w="full" type="submit">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default PostForm;
