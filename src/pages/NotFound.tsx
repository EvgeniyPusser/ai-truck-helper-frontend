// Placeholder file for project structureimport React from "react";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading
        display="inline-block"
        as="h1"
        size="2xl"
        bgGradient="linear(to-r, teal.400, teal.600)"
        backgroundClip="text"
      >
        404
      </Heading>
      <Text fontSize="18px" mt={3} mb={2}>
        Страница не найдена
      </Text>
      <Text color={"gray.500"} mb={6}>
        Извините, но страница, которую вы ищете, отсутствует.
      </Text>

      <Button colorScheme="teal" onClick={() => navigate("/")}>
        На главную
      </Button>
    </Box>
  );
};

export default NotFound;
