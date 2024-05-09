import { Box, Flex, Heading, Text, VStack, Link, Container } from "@chakra-ui/react";
import { FaHome, FaInfoCircle, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex direction="column" minH="100vh">
        <Flex as="header" bg="brand.800" color="white" py={4} px={8} align="center" justify="space-between">
          <Heading as="h1" size="lg">Beautiful Official Website</Heading>
          <Flex as="nav">
            <Link href="#home" p={3} fontSize="lg" display="flex" alignItems="center"><FaHome /> Home</Link>
            <Link href="#about" p={3} fontSize="lg" display="flex" alignItems="center"><FaInfoCircle /> About</Link>
            <Link href="#contact" p={3} fontSize="lg" display="flex" alignItems="center"><FaEnvelope /> Contact</Link>
          </Flex>
        </Flex>
        <VStack spacing={8} py={20} px={8} align="center" justify="center" flexGrow={1}>
          <Heading as="h2" size="2xl" textAlign="center">Welcome to Our Official Website</Heading>
          <Text fontSize="xl" maxW="container.md" textAlign="center">
            Explore our services and learn more about what we offer. Our website is designed to provide a seamless experience, whether you're browsing on desktop or mobile.
          </Text>
        </VStack>
        <Box as="footer" bg="brand.700" color="white" py={4} textAlign="center">
          © 2023 Beautiful Official Website. All rights reserved.
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;