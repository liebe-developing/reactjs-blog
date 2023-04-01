import { Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const { id, title, datetime, description } = post;

  return (
    <Link to={`/post/${id}`}>
      <Flex direction="column" p={3} mx={3} borderBottom="1px solid #ddd">
        <Text fontSize="25px" fontWeight="bold">
          {title}
        </Text>
        <Text color="gray.500" fontSize="14px">
          {datetime}
        </Text>
        <Text color="gray.700" fontSize="18px" mt={4} noOfLines={2}>
          {description}
        </Text>
      </Flex>
    </Link>
  );
};

export default Post;
