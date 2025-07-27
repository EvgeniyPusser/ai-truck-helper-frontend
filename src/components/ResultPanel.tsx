// src/components/ResultPanel.tsx
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import React from "react";

interface ResultPanelProps {
  result: any;
  onReset: () => void;
}

export function ResultPanel({ result, onReset }: ResultPanelProps) {
  return (
    <Box
      mt={8}
      p={6}
      bg="white"
      boxShadow="md"
      borderRadius="md"
      maxW="600px"
      mx="auto"
    >
      <Heading size="md" mb={4}>
        Your Moving Plan
      </Heading>

      <Text>
        <b>From:</b> {result.from}
      </Text>
      <Text>
        <b>To:</b> {result.to}
      </Text>
      <Text>
        <b>Date:</b> {result.date}
      </Text>
      <Text>
        <b>Truck:</b> {result.truck_name} ({result.truck_size})
      </Text>
      <Text>
        <b>Estimated Volume:</b> {result.estimated_volume_m3} m³
      </Text>
      <Text>
        <b>Estimated Distance:</b> {result.estimated_distance_km} km
      </Text>
      <Text>
        <b>Helpers Needed:</b> {result.helpers_needed}
      </Text>
      <Text>
        <b>Estimated Price:</b> ${result.estimated_price_usd.toFixed(2)}
      </Text>
      <Text mt={4} fontStyle="italic">
        {result.comments}
      </Text>

      <Button mt={6} colorScheme="red" onClick={onReset}>
        Reset
      </Button>
    </Box>
  );
}
