import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const ClientDashboard = () => {
  return (
    <Box p={6}>
      <Heading size="lg" mb={4}>
        Welcome to your Dashboard
      </Heading>
      <Text>Here you can view your moving plans and history.</Text>
    </Box>
  );
};

export default ClientDashboard;
