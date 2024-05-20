import { Box, Flex, Heading, Text, VStack, Link, Container, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button } from "@chakra-ui/react";
import { useState } from "react";
import { FaHome, FaInfoCircle, FaEnvelope } from "react-icons/fa";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <Container maxW="container.xl" p={0}>
      <Flex direction="column" minH="100vh">
        <Flex as="header" bg="brand.800" color="white" py={4} px={8} align="center" justify="space-between">
          <Heading as="h1" size="lg">Beautiful Official Website</Heading>
          <Flex as="nav">
            <Link onClick={openModal} p={3} fontSize="lg" display="flex" alignItems="center"><FaHome /> Home</Link>
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
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Home Modal</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>Welcome to the Home section!</Text>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={closeModal}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        
        <Box as="footer" bg="brand.700" color="white" py={4} textAlign="center">
          © 2023 Beautiful Official Website. All rights reserved.
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;