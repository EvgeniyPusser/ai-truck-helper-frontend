// HeroSection component
import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

export function HeroSection() {
  return (
    <Box flex="1" pr={{ md: 10 }} mb={{ base: 10, md: 0 }}>
      <Heading size="2xl" mb={4}>
        Plan Your Move Like a Pro
      </Heading>
      <Text fontSize="lg" color="gray.600">
        Book your truck, estimate space, and get AI help — all in one place.
      </Text>
    </Box>
  );
}


