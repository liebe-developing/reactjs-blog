import { Flex, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Missing = () => {
  return (
    <Flex direction="column" textAlign="center" my={10}>
      <Heading size="lg">Oops! Page Not Found</Heading>
      <Text color="gray.700" fontSize="18px">
        Well, that's disappointing.
      </Text>
      <Text color="teal" fontSize="16px" mt={4}>
        <Link to="/">Visit our homepage</Link>
      </Text>
    </Flex>
  );
};

export default Missing;
