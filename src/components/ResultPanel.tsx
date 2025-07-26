import React from "react";
import { Box, Button, Heading, Text } from "@chakra-ui/react";

interface ResultPanelProps {
  result: any;
  onReset: () => void;
}

export function ResultPanel({ result, onReset }: ResultPanelProps) {
  return (
    <Box
      mt={10}
      p={6}
      bg="white"
      borderRadius="lg"
      shadow="md"
      maxW="600px"
      mx="auto"
    >
      <Heading size="lg" mb={4} textAlign="center" color="teal.600">
        Your Move Plan Results
      </Heading>

      <Box
        as="pre"
        whiteSpace="pre-wrap"
        fontSize="md"
        lineHeight="tall"
        p={4}
        bg="gray.50"
        borderRadius="md"
        overflowX="auto"
        maxH="300px"
      >
        {typeof result === "string" ? result : JSON.stringify(result, null, 2)}
      </Box>

      <Button mt={4} colorScheme="red" onClick={onReset} w="full">
        Reset Form
      </Button>
    </Box>
  );
}
