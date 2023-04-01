import { Box } from "@chakra-ui/react";

const Footer = () => {
  const today = new Date();
  return (
    <Box
      position="absolute"
      bottom="0"
      w="inherit"
      p={3}
      bgColor="cyan"
      textAlign="center"
    >
      Copyright &copy; {today.getFullYear()}
    </Box>
  );
};

export default Footer;
