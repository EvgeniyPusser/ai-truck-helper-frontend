import { Box, Text, Heading, VStack, Button } from "@chakra-ui/react";

interface ResultPanelProps {
  result: any;
  onReset: () => void;
}

export function ResultPanel({ result, onReset }: ResultPanelProps) {
  return (
    <Box p={6} bg="white" borderRadius="xl" boxShadow="lg" maxW="md">
      <Heading size="md" mb={4}>
        Your Move Plan
      </Heading>
      <VStack align="start" spacing={2}>
        <Text>
          <strong>From:</strong> {result.from}
        </Text>
        <Text>
          <strong>To:</strong> {result.to}
        </Text>
        <Text>
          <strong>Date:</strong> {result.date}
        </Text>
        <Text>
          <strong>Distance:</strong> {result.estimated_distance_km} km
        </Text>
        <Text>
          <strong>Volume:</strong> {result.estimated_volume_m3} m³
        </Text>
        <Text>
          <strong>Truck:</strong> {result.truck_name} (ID: {result.truck_size})
        </Text>
        <Text>
          <strong>Helpers Needed:</strong> {result.helpers_needed}
        </Text>
        <Text>
          <strong>Estimated Price:</strong> ${result.estimated_price_usd}
        </Text>
        <Text>
          <strong>Notes:</strong> {result.comments}
        </Text>
      </VStack>
      <Button mt={4} colorScheme="blue" onClick={onReset}>
        Plan Another Move
      </Button>
    </Box>
  );
}
